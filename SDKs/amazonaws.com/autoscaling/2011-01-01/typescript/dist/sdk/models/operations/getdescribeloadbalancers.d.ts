import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLoadBalancersActionEnum {
    DescribeLoadBalancers = "DescribeLoadBalancers"
}
export declare enum GetDescribeLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeLoadBalancersQueryParams extends SpeakeasyBase {
    action: GetDescribeLoadBalancersActionEnum;
    autoScalingGroupName: string;
    maxRecords?: number;
    nextToken?: string;
    version: GetDescribeLoadBalancersVersionEnum;
}
export declare class GetDescribeLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLoadBalancersRequest extends SpeakeasyBase {
    queryParams: GetDescribeLoadBalancersQueryParams;
    headers: GetDescribeLoadBalancersHeaders;
}
export declare class GetDescribeLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
