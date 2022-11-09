import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateReceiptRuleActionEnum {
    UpdateReceiptRule = "UpdateReceiptRule"
}
export declare enum PostUpdateReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateReceiptRuleQueryParams extends SpeakeasyBase {
    action: PostUpdateReceiptRuleActionEnum;
    version: PostUpdateReceiptRuleVersionEnum;
}
export declare class PostUpdateReceiptRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateReceiptRuleRequest extends SpeakeasyBase {
    queryParams: PostUpdateReceiptRuleQueryParams;
    headers: PostUpdateReceiptRuleHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
