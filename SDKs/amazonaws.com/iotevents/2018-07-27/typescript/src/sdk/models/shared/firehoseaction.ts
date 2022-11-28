import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";



// FirehoseAction
/** 
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
**/
export class FirehoseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Payload;

  @SpeakeasyMetadata({ data: "json, name=separator" })
  separator?: string;
}
