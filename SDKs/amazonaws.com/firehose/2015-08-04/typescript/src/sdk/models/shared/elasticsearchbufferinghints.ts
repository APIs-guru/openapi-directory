import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticsearchBufferingHints
/** 
 * Describes the buffering to perform before delivering data to the Amazon ES destination.
**/
export class ElasticsearchBufferingHints extends SpeakeasyBase {
  @Metadata({ data: "json, name=IntervalInSeconds" })
  intervalInSeconds?: number;

  @Metadata({ data: "json, name=SizeInMBs" })
  sizeInMBs?: number;
}
