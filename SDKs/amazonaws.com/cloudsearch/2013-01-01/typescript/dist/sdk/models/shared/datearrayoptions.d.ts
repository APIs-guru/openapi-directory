import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.
**/
export declare class DateArrayOptions extends SpeakeasyBase {
    defaultValue?: string;
    facetEnabled?: boolean;
    returnEnabled?: boolean;
    searchEnabled?: boolean;
    sourceFields?: string;
}
