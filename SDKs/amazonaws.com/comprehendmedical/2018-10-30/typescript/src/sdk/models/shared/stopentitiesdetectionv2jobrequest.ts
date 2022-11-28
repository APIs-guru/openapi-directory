import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopEntitiesDetectionV2JobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
