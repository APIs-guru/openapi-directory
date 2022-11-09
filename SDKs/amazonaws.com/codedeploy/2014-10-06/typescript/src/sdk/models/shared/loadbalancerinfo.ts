import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ElbInfo } from "./elbinfo";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TargetGroupPairInfo } from "./targetgrouppairinfo";


// LoadBalancerInfo
/** 
 * Information about the Elastic Load Balancing load balancer or target group used in a deployment.
**/
export class LoadBalancerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=elbInfoList", elemType: shared.ElbInfo })
  elbInfoList?: ElbInfo[];

  @Metadata({ data: "json, name=targetGroupInfoList", elemType: shared.TargetGroupInfo })
  targetGroupInfoList?: TargetGroupInfo[];

  @Metadata({ data: "json, name=targetGroupPairInfoList", elemType: shared.TargetGroupPairInfo })
  targetGroupPairInfoList?: TargetGroupPairInfo[];
}
