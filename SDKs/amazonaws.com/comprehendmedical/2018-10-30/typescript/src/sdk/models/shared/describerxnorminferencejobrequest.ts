import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRxNormInferenceJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
