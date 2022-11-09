import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClassicLinkInstancesActionEnum {
    DescribeClassicLinkInstances = "DescribeClassicLinkInstances"
}
export declare enum PostDescribeClassicLinkInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeClassicLinkInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeClassicLinkInstancesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeClassicLinkInstancesVersionEnum;
}
export declare class PostDescribeClassicLinkInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClassicLinkInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeClassicLinkInstancesQueryParams;
    headers: PostDescribeClassicLinkInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClassicLinkInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
