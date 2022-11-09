import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqsAction
/** 
 * Describes an action to publish data to an Amazon SQS queue.
**/
export class SqsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=queueUrl" })
  queueUrl: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=useBase64" })
  useBase64?: boolean;
}
