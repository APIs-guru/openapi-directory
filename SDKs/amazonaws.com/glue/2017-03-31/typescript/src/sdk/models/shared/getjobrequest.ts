import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;
}
