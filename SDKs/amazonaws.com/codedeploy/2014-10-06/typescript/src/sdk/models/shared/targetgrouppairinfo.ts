import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficRoute } from "./trafficroute";
import { TargetGroupInfo } from "./targetgroupinfo";



// TargetGroupPairInfo
/** 
 *  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. 
**/
export class TargetGroupPairInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prodTrafficRoute" })
  prodTrafficRoute?: TrafficRoute;

  @SpeakeasyMetadata({ data: "json, name=targetGroups", elemType: TargetGroupInfo })
  targetGroups?: TargetGroupInfo[];

  @SpeakeasyMetadata({ data: "json, name=testTrafficRoute" })
  testTrafficRoute?: TrafficRoute;
}
