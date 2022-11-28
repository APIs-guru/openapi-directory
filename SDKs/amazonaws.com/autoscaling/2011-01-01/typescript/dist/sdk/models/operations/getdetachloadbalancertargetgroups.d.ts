import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachLoadBalancerTargetGroupsActionEnum {
    DetachLoadBalancerTargetGroups = "DetachLoadBalancerTargetGroups"
}
export declare enum GetDetachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDetachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
    action: GetDetachLoadBalancerTargetGroupsActionEnum;
    autoScalingGroupName: string;
    targetGroupArNs: string[];
    version: GetDetachLoadBalancerTargetGroupsVersionEnum;
}
export declare class GetDetachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
    queryParams: GetDetachLoadBalancerTargetGroupsQueryParams;
    headers: GetDetachLoadBalancerTargetGroupsHeaders;
}
export declare class GetDetachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
