import { SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionConfig } from "./fieldlevelencryptionconfig";
/**
 * A complex data type that includes the profile configurations and other options specified for field-level encryption.
**/
export declare class FieldLevelEncryption extends SpeakeasyBase {
    fieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
    id: string;
    lastModifiedTime: Date;
}
