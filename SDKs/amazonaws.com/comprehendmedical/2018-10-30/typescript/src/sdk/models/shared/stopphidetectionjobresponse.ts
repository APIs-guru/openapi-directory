import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPhiDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
