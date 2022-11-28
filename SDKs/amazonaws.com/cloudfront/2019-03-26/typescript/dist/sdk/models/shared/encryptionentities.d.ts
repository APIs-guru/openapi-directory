import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntity } from "./encryptionentity";
/**
 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
**/
export declare class EncryptionEntities extends SpeakeasyBase {
    items?: EncryptionEntity[];
    quantity: number;
}
