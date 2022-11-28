import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobWithAttemptsRead } from "./jobwithattemptsread";



export class JobReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: JobWithAttemptsRead })
  jobs: JobWithAttemptsRead[];
}
