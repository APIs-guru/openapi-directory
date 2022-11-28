import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindowStateChange } from "./instanceeventwindowstatechange";



export class DeleteInstanceEventWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceEventWindowState?: InstanceEventWindowStateChange;
}
