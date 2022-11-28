import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTopicsDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
