import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";
import { JobSummary } from "./jobsummary";



// Job
/** 
 *  Describes an execution job for an Amplify app. 
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=steps", elemType: Step })
  steps: Step[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: JobSummary;
}
