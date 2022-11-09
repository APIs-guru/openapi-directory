import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobRun } from "./jobrun";


export class GetJobRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobRun" })
  jobRun?: JobRun;
}
