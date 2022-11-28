import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";



export class GetJobRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobRuns", elemType: JobRun })
  jobRuns?: JobRun[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
