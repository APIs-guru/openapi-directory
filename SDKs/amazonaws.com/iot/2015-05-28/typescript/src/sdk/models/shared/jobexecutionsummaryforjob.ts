import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";


// JobExecutionSummaryForJob
/** 
 * Contains a summary of information about job executions for a specific job.
**/
export class JobExecutionSummaryForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobExecutionSummary" })
  jobExecutionSummary?: JobExecutionSummary;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;
}
