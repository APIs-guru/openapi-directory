import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePiiEntitiesDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
