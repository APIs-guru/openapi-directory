import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeReceiptRuleSetActionEnum {
    DescribeReceiptRuleSet = "DescribeReceiptRuleSet"
}
export declare enum PostDescribeReceiptRuleSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostDescribeReceiptRuleSetQueryParams extends SpeakeasyBase {
    action: PostDescribeReceiptRuleSetActionEnum;
    version: PostDescribeReceiptRuleSetVersionEnum;
}
export declare class PostDescribeReceiptRuleSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReceiptRuleSetRequest extends SpeakeasyBase {
    queryParams: PostDescribeReceiptRuleSetQueryParams;
    headers: PostDescribeReceiptRuleSetHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReceiptRuleSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
