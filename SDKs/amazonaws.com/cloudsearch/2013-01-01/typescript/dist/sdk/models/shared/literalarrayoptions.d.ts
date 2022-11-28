import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.
**/
export declare class LiteralArrayOptions extends SpeakeasyBase {
    defaultValue?: string;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sourceFields?: string;
}
