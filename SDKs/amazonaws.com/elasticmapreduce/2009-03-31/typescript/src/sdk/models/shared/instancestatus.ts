import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceStateEnum } from "./instancestateenum";
import { InstanceStateChangeReason } from "./instancestatechangereason";
import { InstanceTimeline } from "./instancetimeline";


// InstanceStatus
/** 
 * The instance status details.
**/
export class InstanceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: InstanceStateChangeReason;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: InstanceTimeline;
}
