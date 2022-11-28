import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisAction
/** 
 * Describes an action to write data to an Amazon Kinesis stream.
**/
export class KinesisAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName: string;
}
