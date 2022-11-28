import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDominantLanguageDetectionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
