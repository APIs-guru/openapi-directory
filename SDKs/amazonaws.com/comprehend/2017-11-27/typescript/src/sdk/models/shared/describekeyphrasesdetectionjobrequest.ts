import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
