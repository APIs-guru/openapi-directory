import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobExecutionSummary } from "./jobexecutionsummary";
import { JobExecutionSummary } from "./jobexecutionsummary";


export class GetPendingJobExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inProgressJobs", elemType: shared.JobExecutionSummary })
  inProgressJobs?: JobExecutionSummary[];

  @Metadata({ data: "json, name=queuedJobs", elemType: shared.JobExecutionSummary })
  queuedJobs?: JobExecutionSummary[];
}
