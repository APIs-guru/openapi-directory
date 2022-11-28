import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowStateEnum } from "./instanceeventwindowstateenum";



// InstanceEventWindowStateChange
/** 
 * The state of the event window.
**/
export class InstanceEventWindowStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindowId?: string;

  @SpeakeasyMetadata()
  state?: InstanceEventWindowStateEnum;
}
