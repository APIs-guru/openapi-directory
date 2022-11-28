import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
**/
export declare class IntArrayOptions extends SpeakeasyBase {
    defaultValue?: number;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sourceFields?: string;
}
