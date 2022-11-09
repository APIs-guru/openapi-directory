import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetJobDetailsInput
/** 
 * Represents the input of a <code>GetJobDetails</code> action.
**/
export class GetJobDetailsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId: string;
}
