import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



export class StartEventsDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;
}
