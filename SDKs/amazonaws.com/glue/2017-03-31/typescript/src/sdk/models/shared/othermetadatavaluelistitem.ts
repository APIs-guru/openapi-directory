import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OtherMetadataValueListItem
/** 
 * A structure containing other metadata for a schema version belonging to the same metadata key.
**/
export class OtherMetadataValueListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;
}
