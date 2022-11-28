import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MlUserDataEncryptionModeStringEnum } from "./mluserdataencryptionmodestringenum";



// MlUserDataEncryption
/** 
 * The encryption-at-rest settings of the transform that apply to accessing user data.
**/
export class MlUserDataEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MlUserDataEncryptionMode" })
  mlUserDataEncryptionMode: MlUserDataEncryptionModeStringEnum;
}
