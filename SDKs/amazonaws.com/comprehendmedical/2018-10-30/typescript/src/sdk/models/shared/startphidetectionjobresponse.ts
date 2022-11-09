import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPhiDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
