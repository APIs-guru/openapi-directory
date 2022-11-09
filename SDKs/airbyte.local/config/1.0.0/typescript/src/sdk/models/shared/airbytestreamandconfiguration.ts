import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AirbyteStreamConfiguration } from "./airbytestreamconfiguration";
import { AirbyteStream } from "./airbytestream";


// AirbyteStreamAndConfiguration
/** 
 * each stream is split in two parts; the immutable schema from source and mutable configuration for destination
**/
export class AirbyteStreamAndConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: AirbyteStreamConfiguration;

  @Metadata({ data: "json, name=stream" })
  stream?: AirbyteStream;
}
