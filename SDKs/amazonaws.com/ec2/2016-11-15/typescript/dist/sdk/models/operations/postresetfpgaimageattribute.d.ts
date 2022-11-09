import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostResetFpgaImageAttributeActionEnum {
    ResetFpgaImageAttribute = "ResetFpgaImageAttribute"
}
export declare enum PostResetFpgaImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetFpgaImageAttributeQueryParams extends SpeakeasyBase {
    action: PostResetFpgaImageAttributeActionEnum;
    version: PostResetFpgaImageAttributeVersionEnum;
}
export declare class PostResetFpgaImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetFpgaImageAttributeRequest extends SpeakeasyBase {
    queryParams: PostResetFpgaImageAttributeQueryParams;
    headers: PostResetFpgaImageAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostResetFpgaImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
