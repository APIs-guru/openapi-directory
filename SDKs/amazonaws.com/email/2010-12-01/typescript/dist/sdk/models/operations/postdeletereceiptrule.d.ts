import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteReceiptRuleActionEnum {
    DeleteReceiptRule = "DeleteReceiptRule"
}
export declare enum PostDeleteReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDeleteReceiptRuleQueryParams extends SpeakeasyBase {
    action: PostDeleteReceiptRuleActionEnum;
    version: PostDeleteReceiptRuleVersionEnum;
}
export declare class PostDeleteReceiptRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteReceiptRuleRequest extends SpeakeasyBase {
    queryParams: PostDeleteReceiptRuleQueryParams;
    headers: PostDeleteReceiptRuleHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
