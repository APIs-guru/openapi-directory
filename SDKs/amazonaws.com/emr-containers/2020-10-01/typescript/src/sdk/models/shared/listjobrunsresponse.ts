import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobRun } from "./jobrun";


export class ListJobRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobRuns", elemType: shared.JobRun })
  jobRuns?: JobRun[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
