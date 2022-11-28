import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionConfig } from "./fieldlevelencryptionconfig";



// FieldLevelEncryption
/** 
 * A complex data type that includes the profile configurations and other options specified for field-level encryption. 
**/
export class FieldLevelEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionConfig: FieldLevelEncryptionConfig;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;
}
