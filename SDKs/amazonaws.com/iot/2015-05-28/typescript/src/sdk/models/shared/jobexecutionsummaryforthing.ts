import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";


// JobExecutionSummaryForThing
/** 
 * The job execution summary for a thing.
**/
export class JobExecutionSummaryForThing extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobExecutionSummary" })
  jobExecutionSummary?: JobExecutionSummary;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;
}
