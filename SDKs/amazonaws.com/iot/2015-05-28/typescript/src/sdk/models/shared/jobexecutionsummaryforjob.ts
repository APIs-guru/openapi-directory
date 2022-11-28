import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";



// JobExecutionSummaryForJob
/** 
 * Contains a summary of information about job executions for a specific job.
**/
export class JobExecutionSummaryForJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobExecutionSummary" })
  jobExecutionSummary?: JobExecutionSummary;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;
}
