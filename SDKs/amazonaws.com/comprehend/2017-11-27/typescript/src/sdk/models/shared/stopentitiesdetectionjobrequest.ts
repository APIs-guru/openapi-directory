import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopEntitiesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
