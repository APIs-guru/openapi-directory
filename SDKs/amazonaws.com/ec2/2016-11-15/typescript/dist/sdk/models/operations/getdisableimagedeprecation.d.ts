import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisableImageDeprecationActionEnum {
    DisableImageDeprecation = "DisableImageDeprecation"
}
export declare enum GetDisableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableImageDeprecationQueryParams extends SpeakeasyBase {
    action: GetDisableImageDeprecationActionEnum;
    dryRun?: boolean;
    imageId: string;
    version: GetDisableImageDeprecationVersionEnum;
}
export declare class GetDisableImageDeprecationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableImageDeprecationRequest extends SpeakeasyBase {
    queryParams: GetDisableImageDeprecationQueryParams;
    headers: GetDisableImageDeprecationHeaders;
}
export declare class GetDisableImageDeprecationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
