import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPhiDetectionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
