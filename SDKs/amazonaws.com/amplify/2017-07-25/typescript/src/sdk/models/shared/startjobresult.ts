import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobSummary } from "./jobsummary";


// StartJobResult
/** 
 *  The result structure for the run job request. 
**/
export class StartJobResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
