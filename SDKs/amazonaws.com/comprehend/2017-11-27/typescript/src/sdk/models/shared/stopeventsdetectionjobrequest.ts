import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopEventsDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
