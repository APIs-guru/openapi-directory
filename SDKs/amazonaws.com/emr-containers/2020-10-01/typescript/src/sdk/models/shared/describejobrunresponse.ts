import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobRun } from "./jobrun";


export class DescribeJobRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobRun" })
  jobRun?: JobRun;
}
