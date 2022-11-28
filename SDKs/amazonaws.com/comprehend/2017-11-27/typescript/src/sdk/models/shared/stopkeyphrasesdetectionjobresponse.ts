import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";



export class StopKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;
}
