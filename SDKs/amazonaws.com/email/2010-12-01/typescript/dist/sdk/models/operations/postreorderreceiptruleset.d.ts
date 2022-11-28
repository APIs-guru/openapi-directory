import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReorderReceiptRuleSetActionEnum {
    ReorderReceiptRuleSet = "ReorderReceiptRuleSet"
}
export declare enum PostReorderReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostReorderReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostReorderReceiptRuleSetActionEnum;
    version: PostReorderReceiptRuleSetVersionEnum;
}
export declare class PostReorderReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReorderReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostReorderReceiptRuleSetQueryParams;
    headers: PostReorderReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostReorderReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
