import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroup } from "./targetgroup";



// TargetGroupsConfig
/** 
 * Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
**/
export class TargetGroupsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetGroup })
  targetGroups?: TargetGroup[];
}
