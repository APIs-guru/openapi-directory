import { SpeakeasyBase } from "../../../internal/utils";
import { FieldPatterns } from "./fieldpatterns";
/**
 * Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.
**/
export declare class EncryptionEntity extends SpeakeasyBase {
    fieldPatterns: FieldPatterns;
    providerId: string;
    publicKeyId: string;
}
