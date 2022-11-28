import { SpeakeasyBase } from "../../../internal/utils";
import { MlUserDataEncryptionModeStringEnum } from "./mluserdataencryptionmodestringenum";
/**
 * The encryption-at-rest settings of the transform that apply to accessing user data.
**/
export declare class MlUserDataEncryption extends SpeakeasyBase {
    kmsKeyId?: string;
    mlUserDataEncryptionMode: MlUserDataEncryptionModeStringEnum;
}
