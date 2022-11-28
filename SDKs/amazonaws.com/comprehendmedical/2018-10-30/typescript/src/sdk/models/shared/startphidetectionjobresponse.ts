import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPhiDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
