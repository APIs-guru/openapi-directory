import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListAccessKeysActionEnum {
    ListAccessKeys = "ListAccessKeys"
}
export declare enum PostListAccessKeysVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListAccessKeysQueryParams extends SpeakeasyBase {
    action: PostListAccessKeysActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListAccessKeysVersionEnum;
}
export declare class PostListAccessKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAccessKeysRequest extends SpeakeasyBase {
    queryParams: PostListAccessKeysQueryParams;
    headers: PostListAccessKeysHeaders;
    request?: Uint8Array;
}
export declare class PostListAccessKeysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
