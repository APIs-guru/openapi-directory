import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopIcd10CmInferenceJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
