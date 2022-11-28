import { SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionSummary } from "./fieldlevelencryptionsummary";
/**
 * List of field-level encrpytion configurations.
**/
export declare class FieldLevelEncryptionList extends SpeakeasyBase {
    items?: FieldLevelEncryptionSummary[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
