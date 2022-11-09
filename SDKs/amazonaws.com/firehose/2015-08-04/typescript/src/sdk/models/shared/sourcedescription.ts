import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KinesisStreamSourceDescription } from "./kinesisstreamsourcedescription";


// SourceDescription
/** 
 * Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
**/
export class SourceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=KinesisStreamSourceDescription" })
  kinesisStreamSourceDescription?: KinesisStreamSourceDescription;
}
