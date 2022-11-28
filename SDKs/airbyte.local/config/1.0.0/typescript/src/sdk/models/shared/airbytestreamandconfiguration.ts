import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AirbyteStreamConfiguration } from "./airbytestreamconfiguration";
import { AirbyteStream } from "./airbytestream";



// AirbyteStreamAndConfiguration
/** 
 * each stream is split in two parts; the immutable schema from source and mutable configuration for destination
**/
export class AirbyteStreamAndConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: AirbyteStreamConfiguration;

  @SpeakeasyMetadata({ data: "json, name=stream" })
  stream?: AirbyteStream;
}
