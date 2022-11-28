import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
