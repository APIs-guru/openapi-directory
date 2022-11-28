import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntities } from "./encryptionentities";



// FieldLevelEncryptionProfileConfig
/** 
 * A complex data type of profiles for the field-level encryption.
**/
export class FieldLevelEncryptionProfileConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  encryptionEntities: EncryptionEntities;

  @SpeakeasyMetadata()
  name: string;
}
