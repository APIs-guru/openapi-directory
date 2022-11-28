import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateEnum } from "./instancestateenum";
import { InstanceStateChangeReason } from "./instancestatechangereason";
import { InstanceTimeline } from "./instancetimeline";



// InstanceStatus
/** 
 * The instance status details.
**/
export class InstanceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: InstanceStateChangeReason;

  @SpeakeasyMetadata({ data: "json, name=Timeline" })
  timeline?: InstanceTimeline;
}
