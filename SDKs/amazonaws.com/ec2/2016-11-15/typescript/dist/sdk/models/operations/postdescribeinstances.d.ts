import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeInstancesActionEnum {
    DescribeInstances = "DescribeInstances"
}
export declare enum PostDescribeInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeInstancesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeInstancesVersionEnum;
}
export declare class PostDescribeInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstancesQueryParams;
    headers: PostDescribeInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
