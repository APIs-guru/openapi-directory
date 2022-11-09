import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;
}
