import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseDestinationDetails
/** 
 * The configuration details of the Kinesis Data Firehose destination.
**/
export class KinesisFirehoseDestinationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deliveryStream?: string;
}
