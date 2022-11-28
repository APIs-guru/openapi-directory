import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummaryForJob } from "./jobexecutionsummaryforjob";



export class ListJobExecutionsForJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionSummaries", elemType: JobExecutionSummaryForJob })
  executionSummaries?: JobExecutionSummaryForJob[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
