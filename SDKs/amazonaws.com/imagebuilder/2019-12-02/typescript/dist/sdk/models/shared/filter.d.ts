import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
**/
export declare class Filter extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
