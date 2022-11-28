import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetImageAttributeActionEnum {
    ResetImageAttribute = "ResetImageAttribute"
}
export declare enum PostResetImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetImageAttributeQueryParams extends SpeakeasyBase {
    action: PostResetImageAttributeActionEnum;
    version: PostResetImageAttributeVersionEnum;
}
export declare class PostResetImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetImageAttributeRequest extends SpeakeasyBase {
    queryParams: PostResetImageAttributeQueryParams;
    headers: PostResetImageAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostResetImageAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
