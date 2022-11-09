import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceGroupTimeline
/** 
 * The timeline of the instance group lifecycle.
**/
export class InstanceGroupTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
