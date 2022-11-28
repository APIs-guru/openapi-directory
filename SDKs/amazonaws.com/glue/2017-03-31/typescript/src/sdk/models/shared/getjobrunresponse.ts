import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";



export class GetJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobRun" })
  jobRun?: JobRun;
}
