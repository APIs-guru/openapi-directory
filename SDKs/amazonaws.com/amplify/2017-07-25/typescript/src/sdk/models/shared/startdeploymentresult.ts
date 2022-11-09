import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobSummary } from "./jobsummary";


// StartDeploymentResult
/** 
 *  The result structure for the start a deployment request. 
**/
export class StartDeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
