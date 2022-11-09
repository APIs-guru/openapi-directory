import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MlUserDataEncryptionModeStringEnum } from "./mluserdataencryptionmodestringenum";


// MlUserDataEncryption
/** 
 * The encryption-at-rest settings of the transform that apply to accessing user data.
**/
export class MlUserDataEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MlUserDataEncryptionMode" })
  mlUserDataEncryptionMode: MlUserDataEncryptionModeStringEnum;
}
