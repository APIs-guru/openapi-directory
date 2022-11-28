import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopDominantLanguageDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
