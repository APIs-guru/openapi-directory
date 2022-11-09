import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OtherMetadataValueListItem } from "./othermetadatavaluelistitem";


// MetadataInfo
/** 
 * A structure containing metadata information for a schema version.
**/
export class MetadataInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=MetadataValue" })
  metadataValue?: string;

  @Metadata({ data: "json, name=OtherMetadataValueList", elemType: shared.OtherMetadataValueListItem })
  otherMetadataValueList?: OtherMetadataValueListItem[];
}
