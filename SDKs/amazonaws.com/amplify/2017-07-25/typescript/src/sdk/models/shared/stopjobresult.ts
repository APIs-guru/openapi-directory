import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



// StopJobResult
/** 
 *  The result structure for the stop job request. 
**/
export class StopJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
