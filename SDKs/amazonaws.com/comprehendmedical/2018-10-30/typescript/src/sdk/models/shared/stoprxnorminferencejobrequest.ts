import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopRxNormInferenceJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
