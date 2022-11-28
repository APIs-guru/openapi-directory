import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
**/
export declare class Filter extends SpeakeasyBase {
    contextRowId?: string;
    formula: string;
}
