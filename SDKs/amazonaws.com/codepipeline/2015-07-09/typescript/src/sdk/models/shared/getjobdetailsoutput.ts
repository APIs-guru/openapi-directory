import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobDetails } from "./jobdetails";


// GetJobDetailsOutput
/** 
 * Represents the output of a <code>GetJobDetails</code> action.
**/
export class GetJobDetailsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobDetails" })
  jobDetails?: JobDetails;
}
