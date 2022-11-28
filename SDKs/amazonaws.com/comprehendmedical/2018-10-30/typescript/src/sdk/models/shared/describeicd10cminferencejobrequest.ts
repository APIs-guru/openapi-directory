import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeIcd10CmInferenceJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
