import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName: string;
}
