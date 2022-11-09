import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;
}
