import { SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileSummary } from "./fieldlevelencryptionprofilesummary";
/**
 * List of field-level encryption profiles.
**/
export declare class FieldLevelEncryptionProfileList extends SpeakeasyBase {
    items?: FieldLevelEncryptionProfileSummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
