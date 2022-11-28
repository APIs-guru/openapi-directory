import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StepTimeline
/** 
 * The timeline of the cluster step lifecycle.
**/
export class StepTimeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDateTime" })
  startDateTime?: Date;
}
