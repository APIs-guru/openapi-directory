import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetadataKeyValuePair
/** 
 * A structure containing a key value pair for metadata.
**/
export class MetadataKeyValuePair extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetadataKey" })
  metadataKey?: string;

  @Metadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;
}
