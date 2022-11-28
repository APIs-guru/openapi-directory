import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceGroupTimeline
/** 
 * The timeline of the instance group lifecycle.
**/
export class InstanceGroupTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
