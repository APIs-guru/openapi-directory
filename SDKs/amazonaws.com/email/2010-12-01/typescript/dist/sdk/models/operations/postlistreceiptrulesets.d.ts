import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListReceiptRuleSetsActionEnum {
    ListReceiptRuleSets = "ListReceiptRuleSets"
}
export declare enum PostListReceiptRuleSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostListReceiptRuleSetsQueryParams extends SpeakeasyBase {
    action: PostListReceiptRuleSetsActionEnum;
    version: PostListReceiptRuleSetsVersionEnum;
}
export declare class PostListReceiptRuleSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListReceiptRuleSetsRequest extends SpeakeasyBase {
    queryParams: PostListReceiptRuleSetsQueryParams;
    headers: PostListReceiptRuleSetsHeaders;
    request?: Uint8Array;
}
export declare class PostListReceiptRuleSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
