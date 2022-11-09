import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A single selector statement in an advanced event selector.
**/
export declare class AdvancedFieldSelector extends SpeakeasyBase {
    endsWith?: string[];
    equals?: string[];
    field: string;
    notEndsWith?: string[];
    notEquals?: string[];
    notStartsWith?: string[];
    startsWith?: string[];
}
