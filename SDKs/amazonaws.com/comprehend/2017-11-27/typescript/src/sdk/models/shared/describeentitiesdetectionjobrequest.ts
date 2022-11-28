import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEntitiesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
