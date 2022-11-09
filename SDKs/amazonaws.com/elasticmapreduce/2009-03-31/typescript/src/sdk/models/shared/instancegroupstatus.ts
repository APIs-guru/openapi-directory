import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";
import { InstanceGroupStateChangeReason } from "./instancegroupstatechangereason";
import { InstanceGroupTimeline } from "./instancegrouptimeline";


// InstanceGroupStatus
/** 
 * The details of the instance group status.
**/
export class InstanceGroupStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: InstanceGroupStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: InstanceGroupStateChangeReason;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: InstanceGroupTimeline;
}
