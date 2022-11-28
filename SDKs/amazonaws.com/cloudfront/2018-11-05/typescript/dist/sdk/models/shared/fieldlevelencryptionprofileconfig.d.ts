import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntities } from "./encryptionentities";
/**
 * A complex data type of profiles for the field-level encryption.
**/
export declare class FieldLevelEncryptionProfileConfig extends SpeakeasyBase {
    callerReference: string;
    comment?: string;
    encryptionEntities: EncryptionEntities;
    name: string;
}
