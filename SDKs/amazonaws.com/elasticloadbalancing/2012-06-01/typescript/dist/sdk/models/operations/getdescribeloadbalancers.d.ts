import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLoadBalancersActionEnum {
    DescribeLoadBalancers = "DescribeLoadBalancers"
}
export declare enum GetDescribeLoadBalancersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDescribeLoadBalancersQueryParams extends SpeakeasyBase {
    action: GetDescribeLoadBalancersActionEnum;
    loadBalancerNames?: string[];
    marker?: string;
    pageSize?: number;
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
