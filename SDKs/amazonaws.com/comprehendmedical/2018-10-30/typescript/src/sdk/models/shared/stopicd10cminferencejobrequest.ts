import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopIcd10CmInferenceJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
