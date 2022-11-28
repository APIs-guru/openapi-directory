import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;
}
