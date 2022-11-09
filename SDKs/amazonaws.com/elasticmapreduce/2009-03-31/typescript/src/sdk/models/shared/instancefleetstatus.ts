import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceFleetStateEnum } from "./instancefleetstateenum";
import { InstanceFleetStateChangeReason } from "./instancefleetstatechangereason";
import { InstanceFleetTimeline } from "./instancefleettimeline";


// InstanceFleetStatus
/** 
 * <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleetStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: InstanceFleetStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: InstanceFleetStateChangeReason;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: InstanceFleetTimeline;
}
