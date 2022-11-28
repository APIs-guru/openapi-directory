import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableImageDeprecationActionEnum {
    EnableImageDeprecation = "EnableImageDeprecation"
}
export declare enum GetEnableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableImageDeprecationQueryParams extends SpeakeasyBase {
    action: GetEnableImageDeprecationActionEnum;
    deprecateAt: Date;
    dryRun?: boolean;
    imageId: string;
    version: GetEnableImageDeprecationVersionEnum;
}
export declare class GetEnableImageDeprecationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableImageDeprecationRequest extends SpeakeasyBase {
    queryParams: GetEnableImageDeprecationQueryParams;
    headers: GetEnableImageDeprecationHeaders;
}
export declare class GetEnableImageDeprecationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
