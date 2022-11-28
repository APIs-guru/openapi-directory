import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAutoScalingInstancesActionEnum {
    DescribeAutoScalingInstances = "DescribeAutoScalingInstances"
}
export declare enum PostDescribeAutoScalingInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeAutoScalingInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeAutoScalingInstancesActionEnum;
    maxRecords?: string;
    nextToken?: string;
    version: PostDescribeAutoScalingInstancesVersionEnum;
}
export declare class PostDescribeAutoScalingInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAutoScalingInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAutoScalingInstancesQueryParams;
    headers: PostDescribeAutoScalingInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAutoScalingInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
