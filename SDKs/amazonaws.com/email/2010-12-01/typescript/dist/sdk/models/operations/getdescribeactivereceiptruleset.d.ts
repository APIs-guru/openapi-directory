import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeActiveReceiptRuleSetActionEnum {
    DescribeActiveReceiptRuleSet = "DescribeActiveReceiptRuleSet"
}
export declare enum GetDescribeActiveReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetDescribeActiveReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: GetDescribeActiveReceiptRuleSetActionEnum;
    version: GetDescribeActiveReceiptRuleSetVersionEnum;
}
export declare class GetDescribeActiveReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeActiveReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: GetDescribeActiveReceiptRuleSetQueryParams;
    headers: GetDescribeActiveReceiptRuleSetHeaders;
}
export declare class GetDescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
