import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisAction
/** 
 * Describes an action to write data to an Amazon Kinesis stream.
**/
export class KinesisAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=streamName" })
  streamName: string;
}
