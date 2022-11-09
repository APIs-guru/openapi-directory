import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Step } from "./step";
import { JobSummary } from "./jobsummary";


// Job
/** 
 *  Describes an execution job for an Amplify app. 
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=steps", elemType: shared.Step })
  steps: Step[];

  @Metadata({ data: "json, name=summary" })
  summary: JobSummary;
}
