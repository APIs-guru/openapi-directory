import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirehoseAction
/** 
 * Describes an action that writes data to an Amazon Kinesis Firehose stream.
**/
export class FirehoseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchMode" })
  batchMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deliveryStreamName" })
  deliveryStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=separator" })
  separator?: string;
}
