import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKeyTypeEnum } from "./encryptionkeytypeenum";


// EncryptionKey
/** 
 * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
**/
export class EncryptionKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: EncryptionKeyTypeEnum;
}
