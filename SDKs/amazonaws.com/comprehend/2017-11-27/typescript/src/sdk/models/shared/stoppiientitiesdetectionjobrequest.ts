import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
