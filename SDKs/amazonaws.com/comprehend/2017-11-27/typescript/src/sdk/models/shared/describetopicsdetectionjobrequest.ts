import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTopicsDetectionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
