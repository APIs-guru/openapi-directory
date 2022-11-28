import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeHostsActionEnum {
    DescribeHosts = "DescribeHosts"
}
export declare enum PostDescribeHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeHostsQueryParams extends SpeakeasyBase {
    action: PostDescribeHostsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeHostsVersionEnum;
}
export declare class PostDescribeHostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeHostsRequest extends SpeakeasyBase {
    queryParams: PostDescribeHostsQueryParams;
    headers: PostDescribeHostsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeHostsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
