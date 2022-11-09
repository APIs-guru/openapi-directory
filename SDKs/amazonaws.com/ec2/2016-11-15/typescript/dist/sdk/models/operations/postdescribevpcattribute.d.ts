import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeVpcAttributeActionEnum {
    DescribeVpcAttribute = "DescribeVpcAttribute"
}
export declare enum PostDescribeVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeVpcAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeVpcAttributeActionEnum;
    version: PostDescribeVpcAttributeVersionEnum;
}
export declare class PostDescribeVpcAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeVpcAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeVpcAttributeQueryParams;
    headers: PostDescribeVpcAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeVpcAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
