import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;
}
