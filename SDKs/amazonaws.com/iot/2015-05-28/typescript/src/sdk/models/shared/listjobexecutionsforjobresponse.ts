import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobExecutionSummaryForJob } from "./jobexecutionsummaryforjob";


export class ListJobExecutionsForJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionSummaries", elemType: shared.JobExecutionSummaryForJob })
  executionSummaries?: JobExecutionSummaryForJob[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
