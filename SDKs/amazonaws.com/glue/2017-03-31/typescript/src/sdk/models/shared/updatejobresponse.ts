import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;
}
