import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTargetGroupState } from "./loadbalancertargetgroupstate";
export declare class DescribeLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
    loadBalancerTargetGroups?: LoadBalancerTargetGroupState[];
    nextToken?: string;
}
