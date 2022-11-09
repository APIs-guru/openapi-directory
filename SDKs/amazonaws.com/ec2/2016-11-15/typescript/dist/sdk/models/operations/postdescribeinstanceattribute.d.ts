import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstanceAttributeActionEnum {
    DescribeInstanceAttribute = "DescribeInstanceAttribute"
}
export declare enum PostDescribeInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstanceAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceAttributeActionEnum;
    version: PostDescribeInstanceAttributeVersionEnum;
}
export declare class PostDescribeInstanceAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceAttributeQueryParams;
    headers: PostDescribeInstanceAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
