import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateJobQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobQueueArn" })
  jobQueueArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobQueueName" })
  jobQueueName?: string;
}
