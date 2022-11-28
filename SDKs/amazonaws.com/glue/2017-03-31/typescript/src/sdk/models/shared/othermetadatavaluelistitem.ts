import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OtherMetadataValueListItem
/** 
 * A structure containing other metadata for a schema version belonging to the same metadata key.
**/
export class OtherMetadataValueListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;
}
