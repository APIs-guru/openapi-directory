import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";
import { InstanceGroupStateChangeReason } from "./instancegroupstatechangereason";
import { InstanceGroupTimeline } from "./instancegrouptimeline";



// InstanceGroupStatus
/** 
 * The details of the instance group status.
**/
export class InstanceGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: InstanceGroupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: InstanceGroupStateChangeReason;

  @SpeakeasyMetadata({ data: "json, name=Timeline" })
  timeline?: InstanceGroupTimeline;
}
