import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";



export class GetPendingJobExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressJobs", elemType: JobExecutionSummary })
  inProgressJobs?: JobExecutionSummary[];

  @SpeakeasyMetadata({ data: "json, name=queuedJobs", elemType: JobExecutionSummary })
  queuedJobs?: JobExecutionSummary[];
}
