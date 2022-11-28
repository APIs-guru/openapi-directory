import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKeyTypeEnum } from "./encryptionkeytypeenum";



// EncryptionKey
/** 
 * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
**/
export class EncryptionKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EncryptionKeyTypeEnum;
}
