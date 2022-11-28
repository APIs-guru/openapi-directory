import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetadataKeyValuePair
/** 
 * A structure containing a key value pair for metadata.
**/
export class MetadataKeyValuePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetadataKey" })
  metadataKey?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;
}
