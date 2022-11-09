import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SerDeInfo
/** 
 * Information about a serialization/deserialization program (SerDe) that serves as an extractor and loader.
**/
export class SerDeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string>;

  @Metadata({ data: "json, name=SerializationLibrary" })
  serializationLibrary?: string;
}
