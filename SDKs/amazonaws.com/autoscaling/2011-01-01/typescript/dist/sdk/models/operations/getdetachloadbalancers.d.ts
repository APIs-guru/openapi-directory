import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDetachLoadBalancersActionEnum {
    DetachLoadBalancers = "DetachLoadBalancers"
}
export declare enum GetDetachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDetachLoadBalancersQueryParams extends SpeakeasyBase {
    action: GetDetachLoadBalancersActionEnum;
    autoScalingGroupName: string;
    loadBalancerNames: string[];
    version: GetDetachLoadBalancersVersionEnum;
}
export declare class GetDetachLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachLoadBalancersRequest extends SpeakeasyBase {
    queryParams: GetDetachLoadBalancersQueryParams;
    headers: GetDetachLoadBalancersHeaders;
}
export declare class GetDetachLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
