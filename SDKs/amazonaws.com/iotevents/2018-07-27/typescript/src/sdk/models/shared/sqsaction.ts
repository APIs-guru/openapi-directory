import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";


// SqsAction
/** 
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
**/
export class SqsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: Payload;

  @Metadata({ data: "json, name=queueUrl" })
  queueUrl: string;

  @Metadata({ data: "json, name=useBase64" })
  useBase64?: boolean;
}
