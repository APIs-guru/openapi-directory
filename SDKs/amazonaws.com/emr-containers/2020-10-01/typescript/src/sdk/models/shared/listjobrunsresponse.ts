import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";



export class ListJobRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobRuns", elemType: JobRun })
  jobRuns?: JobRun[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
