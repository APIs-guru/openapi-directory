import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeLoadBalancerPolicyTypesActionEnum {
    DescribeLoadBalancerPolicyTypes = "DescribeLoadBalancerPolicyTypes"
}
export declare enum GetDescribeLoadBalancerPolicyTypesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDescribeLoadBalancerPolicyTypesQueryParams extends SpeakeasyBase {
    action: GetDescribeLoadBalancerPolicyTypesActionEnum;
    policyTypeNames?: string[];
    version: GetDescribeLoadBalancerPolicyTypesVersionEnum;
}
export declare class GetDescribeLoadBalancerPolicyTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLoadBalancerPolicyTypesRequest extends SpeakeasyBase {
    queryParams: GetDescribeLoadBalancerPolicyTypesQueryParams;
    headers: GetDescribeLoadBalancerPolicyTypesHeaders;
}
export declare class GetDescribeLoadBalancerPolicyTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
