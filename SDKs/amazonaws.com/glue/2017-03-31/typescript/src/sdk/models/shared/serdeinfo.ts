import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SerDeInfo
/** 
 * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
**/
export class SerDeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SerializationLibrary" })
  serializationLibrary?: string;
}
