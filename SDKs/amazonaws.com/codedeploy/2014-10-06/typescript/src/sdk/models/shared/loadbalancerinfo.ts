import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElbInfo } from "./elbinfo";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetGroupPairInfo } from "./targetgrouppairinfo";



// LoadBalancerInfo
/** 
 * Information about the Elastic Load Balancing load balancer or target group used in a deployment.
**/
export class LoadBalancerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elbInfoList", elemType: ElbInfo })
  elbInfoList?: ElbInfo[];

  @SpeakeasyMetadata({ data: "json, name=targetGroupInfoList", elemType: TargetGroupInfo })
  targetGroupInfoList?: TargetGroupInfo[];

  @SpeakeasyMetadata({ data: "json, name=targetGroupPairInfoList", elemType: TargetGroupPairInfo })
  targetGroupPairInfoList?: TargetGroupPairInfo[];
}
