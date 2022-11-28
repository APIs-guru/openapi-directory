import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReceiptRuleActionEnum {
    DescribeReceiptRule = "DescribeReceiptRule"
}
export declare enum PostDescribeReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeReceiptRuleQueryParams extends SpeakeasyBase {
    action: PostDescribeReceiptRuleActionEnum;
    version: PostDescribeReceiptRuleVersionEnum;
}
export declare class PostDescribeReceiptRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReceiptRuleRequest extends SpeakeasyBase {
    queryParams: PostDescribeReceiptRuleQueryParams;
    headers: PostDescribeReceiptRuleHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
