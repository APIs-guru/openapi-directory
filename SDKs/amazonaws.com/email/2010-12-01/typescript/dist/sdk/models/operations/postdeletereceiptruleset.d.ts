import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteReceiptRuleSetActionEnum {
    DeleteReceiptRuleSet = "DeleteReceiptRuleSet"
}
export declare enum PostDeleteReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostDeleteReceiptRuleSetActionEnum;
    version: PostDeleteReceiptRuleSetVersionEnum;
}
export declare class PostDeleteReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostDeleteReceiptRuleSetQueryParams;
    headers: PostDeleteReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
