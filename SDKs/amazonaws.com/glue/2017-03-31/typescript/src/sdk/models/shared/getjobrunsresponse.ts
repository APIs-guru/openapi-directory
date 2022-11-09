import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobRun } from "./jobrun";


export class GetJobRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobRuns", elemType: shared.JobRun })
  jobRuns?: JobRun[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
