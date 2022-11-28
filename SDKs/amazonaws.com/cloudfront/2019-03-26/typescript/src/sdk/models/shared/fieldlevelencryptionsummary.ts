import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfileConfig } from "./contenttypeprofileconfig";
import { QueryArgProfileConfig } from "./queryargprofileconfig";



// FieldLevelEncryptionSummary
/** 
 * A summary of a field-level encryption item.
**/
export class FieldLevelEncryptionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  contentTypeProfileConfig?: ContentTypeProfileConfig;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  queryArgProfileConfig?: QueryArgProfileConfig;
}
