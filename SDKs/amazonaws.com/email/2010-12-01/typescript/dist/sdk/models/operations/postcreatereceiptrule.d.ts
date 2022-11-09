import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateReceiptRuleActionEnum {
    CreateReceiptRule = "CreateReceiptRule"
}
export declare enum PostCreateReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostCreateReceiptRuleQueryParams extends SpeakeasyBase {
    action: PostCreateReceiptRuleActionEnum;
    version: PostCreateReceiptRuleVersionEnum;
}
export declare class PostCreateReceiptRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateReceiptRuleRequest extends SpeakeasyBase {
    queryParams: PostCreateReceiptRuleQueryParams;
    headers: PostCreateReceiptRuleHeaders;
    request?: Uint8Array;
}
export declare class PostCreateReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
