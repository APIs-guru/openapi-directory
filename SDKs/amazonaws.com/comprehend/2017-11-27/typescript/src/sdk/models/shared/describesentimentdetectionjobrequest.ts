import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSentimentDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
