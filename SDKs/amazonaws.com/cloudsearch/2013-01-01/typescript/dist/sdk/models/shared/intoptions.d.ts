import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
**/
export declare class IntOptions extends SpeakeasyBase {
    defaultValue?: number;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sortEnabled?: boolean;
    sourceField?: string;
}
