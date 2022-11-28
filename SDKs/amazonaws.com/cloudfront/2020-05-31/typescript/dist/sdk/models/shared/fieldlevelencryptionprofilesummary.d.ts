import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionEntities } from "./encryptionentities";
/**
 * The field-level encryption profile summary.
**/
export declare class FieldLevelEncryptionProfileSummary extends SpeakeasyBase {
    comment?: string;
    encryptionEntities: EncryptionEntities;
    id: string;
    lastModifiedTime: Date;
    name: string;
}
