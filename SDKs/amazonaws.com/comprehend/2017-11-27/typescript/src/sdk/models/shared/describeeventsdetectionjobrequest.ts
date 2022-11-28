import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEventsDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
