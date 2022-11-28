import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;
}
