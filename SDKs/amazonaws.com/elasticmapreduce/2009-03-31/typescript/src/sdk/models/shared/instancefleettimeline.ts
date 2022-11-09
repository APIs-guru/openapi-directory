import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceFleetTimeline
/** 
 * <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export class InstanceFleetTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=ReadyDateTime" })
  readyDateTime?: Date;
}
