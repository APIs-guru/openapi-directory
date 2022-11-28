import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



// StartDeploymentResult
/** 
 *  The result structure for the start a deployment request. 
**/
export class StartDeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobSummary" })
  jobSummary: JobSummary;
}
