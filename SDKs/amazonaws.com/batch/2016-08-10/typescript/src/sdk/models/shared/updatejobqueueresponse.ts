import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateJobQueueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobQueueArn" })
  jobQueueArn?: string;

  @Metadata({ data: "json, name=jobQueueName" })
  jobQueueName?: string;
}
