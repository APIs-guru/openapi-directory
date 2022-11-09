import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeActiveReceiptRuleSetActionEnum {
    DescribeActiveReceiptRuleSet = "DescribeActiveReceiptRuleSet"
}
export declare enum PostDescribeActiveReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeActiveReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostDescribeActiveReceiptRuleSetActionEnum;
    version: PostDescribeActiveReceiptRuleSetVersionEnum;
}
export declare class PostDescribeActiveReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeActiveReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostDescribeActiveReceiptRuleSetQueryParams;
    headers: PostDescribeActiveReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeActiveReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
