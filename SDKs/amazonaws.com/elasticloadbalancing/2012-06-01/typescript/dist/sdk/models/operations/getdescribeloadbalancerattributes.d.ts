import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLoadBalancerAttributesActionEnum {
    DescribeLoadBalancerAttributes = "DescribeLoadBalancerAttributes"
}
export declare enum GetDescribeLoadBalancerAttributesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDescribeLoadBalancerAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeLoadBalancerAttributesActionEnum;
    loadBalancerName: string;
    version: GetDescribeLoadBalancerAttributesVersionEnum;
}
export declare class GetDescribeLoadBalancerAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLoadBalancerAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeLoadBalancerAttributesQueryParams;
    headers: GetDescribeLoadBalancerAttributesHeaders;
}
export declare class GetDescribeLoadBalancerAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
