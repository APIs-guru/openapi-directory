import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstanceHealthActionEnum {
    DescribeInstanceHealth = "DescribeInstanceHealth"
}
export declare enum PostDescribeInstanceHealthVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDescribeInstanceHealthQueryParams extends SpeakeasyBase {
    action: PostDescribeInstanceHealthActionEnum;
    version: PostDescribeInstanceHealthVersionEnum;
}
export declare class PostDescribeInstanceHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstanceHealthRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstanceHealthQueryParams;
    headers: PostDescribeInstanceHealthHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstanceHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
