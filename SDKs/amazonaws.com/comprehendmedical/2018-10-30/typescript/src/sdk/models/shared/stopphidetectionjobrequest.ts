import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPhiDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
