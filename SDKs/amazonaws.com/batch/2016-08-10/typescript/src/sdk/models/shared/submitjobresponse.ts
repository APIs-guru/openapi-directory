import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;
}
