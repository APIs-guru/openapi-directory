import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrafficRoute } from "./trafficroute";
import { TargetGroupInfo } from "./targetgroupinfo";
import { TrafficRoute } from "./trafficroute";


// TargetGroupPairInfo
/** 
 *  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified. 
**/
export class TargetGroupPairInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=prodTrafficRoute" })
  prodTrafficRoute?: TrafficRoute;

  @Metadata({ data: "json, name=targetGroups", elemType: shared.TargetGroupInfo })
  targetGroups?: TargetGroupInfo[];

  @Metadata({ data: "json, name=testTrafficRoute" })
  testTrafficRoute?: TrafficRoute;
}
