import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentTypeProfileConfig } from "./contenttypeprofileconfig";
import { QueryArgProfileConfig } from "./queryargprofileconfig";



// FieldLevelEncryptionConfig
/** 
 * A complex data type that includes the profile configurations specified for field-level encryption. 
**/
export class FieldLevelEncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  contentTypeProfileConfig?: ContentTypeProfileConfig;

  @SpeakeasyMetadata()
  queryArgProfileConfig?: QueryArgProfileConfig;
}
