import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timing
/** 
 * Details about the timing of a job.
**/
export class Timing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FinishTimeMillis" })
  finishTimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=StartTimeMillis" })
  startTimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=SubmitTimeMillis" })
  submitTimeMillis?: number;
}
