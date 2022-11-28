import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetJobDetailsInput
/** 
 * Represents the input of a <code>GetJobDetails</code> action.
**/
export class GetJobDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;
}
