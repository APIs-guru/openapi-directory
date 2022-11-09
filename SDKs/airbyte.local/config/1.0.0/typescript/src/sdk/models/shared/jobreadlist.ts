import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobWithAttemptsRead } from "./jobwithattemptsread";


export class JobReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.JobWithAttemptsRead })
  jobs: JobWithAttemptsRead[];
}
