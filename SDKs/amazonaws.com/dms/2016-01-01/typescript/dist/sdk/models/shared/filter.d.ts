import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations.
**/
export declare class Filter extends SpeakeasyBase {
    name: string;
    values: string[];
}
