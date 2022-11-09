import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Timing
/** 
 * Details about the timing of a job.
**/
export class Timing extends SpeakeasyBase {
  @Metadata({ data: "json, name=FinishTimeMillis" })
  finishTimeMillis?: number;

  @Metadata({ data: "json, name=StartTimeMillis" })
  startTimeMillis?: number;

  @Metadata({ data: "json, name=SubmitTimeMillis" })
  submitTimeMillis?: number;
}
