import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
**/
export declare class Expression extends SpeakeasyBase {
    expressionName: string;
    expressionValue: string;
}
