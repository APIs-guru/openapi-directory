import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";


// FirehoseAction
/** 
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
**/
export class FirehoseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=payload" })
  payload?: Payload;

  @Metadata({ data: "json, name=separator" })
  separator?: string;
}
