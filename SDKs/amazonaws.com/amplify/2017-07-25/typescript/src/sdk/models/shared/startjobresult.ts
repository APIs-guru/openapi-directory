import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



// StartJobResult
/** 
 *  The result structure for the run job request. 
**/
export class StartJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
