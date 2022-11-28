import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntity } from "./encryptionentity";



// EncryptionEntities
/** 
 * Complex data type for field-level encryption profiles that includes all of the encryption entities. 
**/
export class EncryptionEntities extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EncryptionEntity })
  items?: EncryptionEntity[];

  @SpeakeasyMetadata()
  quantity: number;
}
