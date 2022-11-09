import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableImageDeprecationActionEnum {
    EnableImageDeprecation = "EnableImageDeprecation"
}
export declare enum PostEnableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostEnableImageDeprecationQueryParams extends SpeakeasyBase {
    action: PostEnableImageDeprecationActionEnum;
    version: PostEnableImageDeprecationVersionEnum;
}
export declare class PostEnableImageDeprecationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableImageDeprecationRequest extends SpeakeasyBase {
    queryParams: PostEnableImageDeprecationQueryParams;
    headers: PostEnableImageDeprecationHeaders;
    request?: Uint8Array;
}
export declare class PostEnableImageDeprecationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
