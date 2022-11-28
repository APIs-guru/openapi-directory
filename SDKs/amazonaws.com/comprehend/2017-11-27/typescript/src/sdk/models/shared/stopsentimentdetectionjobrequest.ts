import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopSentimentDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
