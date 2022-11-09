import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirehoseAction
/** 
 * Describes an action that writes data to an Amazon Kinesis Firehose stream.
**/
export class FirehoseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchMode" })
  batchMode?: boolean;

  @Metadata({ data: "json, name=deliveryStreamName" })
  deliveryStreamName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=separator" })
  separator?: string;
}
