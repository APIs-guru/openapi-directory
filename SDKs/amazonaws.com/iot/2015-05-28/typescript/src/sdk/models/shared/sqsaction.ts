import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqsAction
/** 
 * Describes an action to publish data to an Amazon SQS queue.
**/
export class SqsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queueUrl" })
  queueUrl: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=useBase64" })
  useBase64?: boolean;
}
