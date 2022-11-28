import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartRxNormInferenceJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
