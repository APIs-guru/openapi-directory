import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticsearchBufferingHints
/** 
 * Describes the buffering to perform before delivering data to the Amazon ES destination.
**/
export class ElasticsearchBufferingHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IntervalInSeconds" })
  intervalInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=SizeInMBs" })
  sizeInMBs?: number;
}
