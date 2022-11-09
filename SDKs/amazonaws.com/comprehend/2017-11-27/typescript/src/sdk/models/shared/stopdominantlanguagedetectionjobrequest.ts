import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopDominantLanguageDetectionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
