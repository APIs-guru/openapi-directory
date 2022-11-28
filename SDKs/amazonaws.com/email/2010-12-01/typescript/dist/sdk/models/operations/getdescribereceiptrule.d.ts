import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeReceiptRuleActionEnum {
    DescribeReceiptRule = "DescribeReceiptRule"
}
export declare enum GetDescribeReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeReceiptRuleQueryParams extends SpeakeasyBase {
    action: GetDescribeReceiptRuleActionEnum;
    ruleName: string;
    ruleSetName: string;
    version: GetDescribeReceiptRuleVersionEnum;
}
export declare class GetDescribeReceiptRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReceiptRuleRequest extends SpeakeasyBase {
    queryParams: GetDescribeReceiptRuleQueryParams;
    headers: GetDescribeReceiptRuleHeaders;
}
export declare class GetDescribeReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
