import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKeyTypeEnum } from "./encryptionkeytypeenum";
/**
 * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
**/
export declare class EncryptionKey extends SpeakeasyBase {
    id: string;
    type: EncryptionKeyTypeEnum;
}
