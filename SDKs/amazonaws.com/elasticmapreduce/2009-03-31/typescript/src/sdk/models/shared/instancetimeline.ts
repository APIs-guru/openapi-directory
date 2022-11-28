import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceTimeline
/** 
 * The timeline of the instance lifecycle.
**/
export class InstanceTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
