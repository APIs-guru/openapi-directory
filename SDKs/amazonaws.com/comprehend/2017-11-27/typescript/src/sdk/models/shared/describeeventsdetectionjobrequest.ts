import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEventsDetectionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
