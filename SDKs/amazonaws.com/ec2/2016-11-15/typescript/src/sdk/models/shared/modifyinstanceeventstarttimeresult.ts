import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusEvent } from "./instancestatusevent";



export class ModifyInstanceEventStartTimeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  event?: InstanceStatusEvent;
}
