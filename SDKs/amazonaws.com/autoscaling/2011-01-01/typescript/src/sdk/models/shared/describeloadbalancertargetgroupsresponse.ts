import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTargetGroupState } from "./loadbalancertargetgroupstate";



export class DescribeLoadBalancerTargetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancerTargetGroupState })
  loadBalancerTargetGroups?: LoadBalancerTargetGroupState[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
