import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
**/
export declare class DoubleArrayOptions extends SpeakeasyBase {
    defaultValue?: number;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sourceFields?: string;
}
