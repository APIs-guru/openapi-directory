import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisableImageDeprecationActionEnum {
    DisableImageDeprecation = "DisableImageDeprecation"
}
export declare enum PostDisableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisableImageDeprecationQueryParams extends SpeakeasyBase {
    action: PostDisableImageDeprecationActionEnum;
    version: PostDisableImageDeprecationVersionEnum;
}
export declare class PostDisableImageDeprecationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableImageDeprecationRequest extends SpeakeasyBase {
    queryParams: PostDisableImageDeprecationQueryParams;
    headers: PostDisableImageDeprecationHeaders;
    request?: Uint8Array;
}
export declare class PostDisableImageDeprecationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
