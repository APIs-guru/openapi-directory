import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.
**/
export declare class LiteralOptions extends SpeakeasyBase {
    defaultValue?: string;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sortEnabled?: boolean;
    sourceField?: string;
}
