import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeTagsActionEnum {
    DescribeTags = "DescribeTags"
}
export declare enum PostDescribeTagsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDescribeTagsQueryParams extends SpeakeasyBase {
    action: PostDescribeTagsActionEnum;
    version: PostDescribeTagsVersionEnum;
}
export declare class PostDescribeTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeTagsRequest extends SpeakeasyBase {
    queryParams: PostDescribeTagsQueryParams;
    headers: PostDescribeTagsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
