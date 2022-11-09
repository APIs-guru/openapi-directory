import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeFleetInstancesActionEnum {
    DescribeFleetInstances = "DescribeFleetInstances"
}
export declare enum PostDescribeFleetInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeFleetInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeFleetInstancesActionEnum;
    version: PostDescribeFleetInstancesVersionEnum;
}
export declare class PostDescribeFleetInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeFleetInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeFleetInstancesQueryParams;
    headers: PostDescribeFleetInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeFleetInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
