import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.
**/
export declare class DoubleOptions extends SpeakeasyBase {
    defaultValue?: number;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sortEnabled?: boolean;
    sourceField?: string;
}
