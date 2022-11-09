import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAttachLoadBalancerTargetGroupsActionEnum {
    AttachLoadBalancerTargetGroups = "AttachLoadBalancerTargetGroups"
}
export declare enum GetAttachLoadBalancerTargetGroupsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetAttachLoadBalancerTargetGroupsQueryParams extends SpeakeasyBase {
    action: GetAttachLoadBalancerTargetGroupsActionEnum;
    autoScalingGroupName: string;
    targetGroupArNs: string[];
    version: GetAttachLoadBalancerTargetGroupsVersionEnum;
}
export declare class GetAttachLoadBalancerTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachLoadBalancerTargetGroupsRequest extends SpeakeasyBase {
    queryParams: GetAttachLoadBalancerTargetGroupsQueryParams;
    headers: GetAttachLoadBalancerTargetGroupsHeaders;
}
export declare class GetAttachLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
