import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StepTimeline
/** 
 * The timeline of the cluster step lifecycle.
**/
export class StepTimeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;
}
