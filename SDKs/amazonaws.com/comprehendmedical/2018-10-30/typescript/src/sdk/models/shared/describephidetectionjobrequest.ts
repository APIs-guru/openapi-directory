import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePhiDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
