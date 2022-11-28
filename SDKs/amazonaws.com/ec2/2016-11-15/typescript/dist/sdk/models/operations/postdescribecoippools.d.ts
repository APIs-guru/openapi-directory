import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCoipPoolsActionEnum {
    DescribeCoipPools = "DescribeCoipPools"
}
export declare enum PostDescribeCoipPoolsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeCoipPoolsQueryParams extends SpeakeasyBase {
    action: PostDescribeCoipPoolsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeCoipPoolsVersionEnum;
}
export declare class PostDescribeCoipPoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCoipPoolsRequest extends SpeakeasyBase {
    queryParams: PostDescribeCoipPoolsQueryParams;
    headers: PostDescribeCoipPoolsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCoipPoolsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
