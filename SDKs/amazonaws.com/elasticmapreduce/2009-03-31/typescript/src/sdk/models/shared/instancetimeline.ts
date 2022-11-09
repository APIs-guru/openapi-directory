import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceTimeline
/** 
 * The timeline of the instance lifecycle.
**/
export class InstanceTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
