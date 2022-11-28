import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";



export class DescribeJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobRun" })
  jobRun?: JobRun;
}
