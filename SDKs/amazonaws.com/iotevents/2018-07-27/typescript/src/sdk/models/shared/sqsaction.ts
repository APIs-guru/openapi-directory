import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";



// SqsAction
/** 
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
**/
export class SqsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;

  @SpeakeasyMetadata({ data: "json, name=queueUrl" })
  queueUrl: string;

  @SpeakeasyMetadata({ data: "json, name=useBase64" })
  useBase64?: boolean;
}
