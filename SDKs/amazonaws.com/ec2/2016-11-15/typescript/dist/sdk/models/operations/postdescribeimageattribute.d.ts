import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeImageAttributeActionEnum {
    DescribeImageAttribute = "DescribeImageAttribute"
}
export declare enum PostDescribeImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeImageAttributeQueryParams extends SpeakeasyBase {
    action: PostDescribeImageAttributeActionEnum;
    version: PostDescribeImageAttributeVersionEnum;
}
export declare class PostDescribeImageAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeImageAttributeRequest extends SpeakeasyBase {
    queryParams: PostDescribeImageAttributeQueryParams;
    headers: PostDescribeImageAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
