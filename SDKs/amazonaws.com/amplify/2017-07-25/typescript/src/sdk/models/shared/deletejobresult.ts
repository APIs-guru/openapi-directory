import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



// DeleteJobResult
/** 
 *  The result structure for the delete job request. 
**/
export class DeleteJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
