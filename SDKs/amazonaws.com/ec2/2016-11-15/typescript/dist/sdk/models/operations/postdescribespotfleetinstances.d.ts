import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSpotFleetInstancesActionEnum {
    DescribeSpotFleetInstances = "DescribeSpotFleetInstances"
}
export declare enum PostDescribeSpotFleetInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSpotFleetInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeSpotFleetInstancesActionEnum;
    version: PostDescribeSpotFleetInstancesVersionEnum;
}
export declare class PostDescribeSpotFleetInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSpotFleetInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeSpotFleetInstancesQueryParams;
    headers: PostDescribeSpotFleetInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSpotFleetInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
