import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetInstanceAttributeActionEnum {
    ResetInstanceAttribute = "ResetInstanceAttribute"
}
export declare enum PostResetInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostResetInstanceAttributeQueryParams extends SpeakeasyBase {
    action: PostResetInstanceAttributeActionEnum;
    version: PostResetInstanceAttributeVersionEnum;
}
export declare class PostResetInstanceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetInstanceAttributeRequest extends SpeakeasyBase {
    queryParams: PostResetInstanceAttributeQueryParams;
    headers: PostResetInstanceAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostResetInstanceAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
