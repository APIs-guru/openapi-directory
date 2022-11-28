import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachLoadBalancersActionEnum {
    AttachLoadBalancers = "AttachLoadBalancers"
}
export declare enum GetAttachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetAttachLoadBalancersQueryParams extends SpeakeasyBase {
    action: GetAttachLoadBalancersActionEnum;
    autoScalingGroupName: string;
    loadBalancerNames: string[];
    version: GetAttachLoadBalancersVersionEnum;
}
export declare class GetAttachLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachLoadBalancersRequest extends SpeakeasyBase {
    queryParams: GetAttachLoadBalancersQueryParams;
    headers: GetAttachLoadBalancersHeaders;
}
export declare class GetAttachLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
