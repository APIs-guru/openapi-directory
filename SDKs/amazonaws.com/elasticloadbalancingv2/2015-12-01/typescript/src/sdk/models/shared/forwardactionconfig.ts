import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupStickinessConfig } from "./targetgroupstickinessconfig";
import { TargetGroupTuple } from "./targetgrouptuple";



// ForwardActionConfig
/** 
 * Information about a forward action.
**/
export class ForwardActionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  targetGroupStickinessConfig?: TargetGroupStickinessConfig;

  @SpeakeasyMetadata({ elemType: TargetGroupTuple })
  targetGroups?: TargetGroupTuple[];
}
