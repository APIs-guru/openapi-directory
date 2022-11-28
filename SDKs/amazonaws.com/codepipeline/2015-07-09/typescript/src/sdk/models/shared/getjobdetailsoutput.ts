import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobDetails } from "./jobdetails";



// GetJobDetailsOutput
/** 
 * Represents the output of a <code>GetJobDetails</code> action.
**/
export class GetJobDetailsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobDetails" })
  jobDetails?: JobDetails;
}
