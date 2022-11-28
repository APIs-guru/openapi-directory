import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDocumentClassificationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
