import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobSummary } from "./jobsummary";


// DeleteJobResult
/** 
 *  The result structure for the delete job request. 
**/
export class DeleteJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
