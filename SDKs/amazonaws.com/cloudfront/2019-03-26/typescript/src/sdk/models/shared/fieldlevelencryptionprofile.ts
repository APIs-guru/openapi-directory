import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileConfig } from "./fieldlevelencryptionprofileconfig";



// FieldLevelEncryptionProfile
/** 
 * A complex data type for field-level encryption profiles.
**/
export class FieldLevelEncryptionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;
}
