import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeReceiptRuleSetActionEnum {
    DescribeReceiptRuleSet = "DescribeReceiptRuleSet"
}
export declare enum GetDescribeReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetDescribeReceiptRuleSetActionEnum;
    ruleSetName: string;
    version: GetDescribeReceiptRuleSetVersionEnum;
}
export declare class GetDescribeReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetDescribeReceiptRuleSetQueryParams;
    headers: GetDescribeReceiptRuleSetHeaders;
}
export declare class GetDescribeReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
