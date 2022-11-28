import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldPatterns } from "./fieldpatterns";



// EncryptionEntity
/** 
 * Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. 
**/
export class EncryptionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldPatterns: FieldPatterns;

  @SpeakeasyMetadata()
  providerId: string;

  @SpeakeasyMetadata()
  publicKeyId: string;
}
