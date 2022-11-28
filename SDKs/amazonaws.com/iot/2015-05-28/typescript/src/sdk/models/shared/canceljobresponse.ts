import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;
}
