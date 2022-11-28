import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";



// JobExecutionSummaryForThing
/** 
 * The job execution summary for a thing.
**/
export class JobExecutionSummaryForThing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobExecutionSummary" })
  jobExecutionSummary?: JobExecutionSummary;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;
}
