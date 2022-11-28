import { SpeakeasyBase } from "../../../internal/utils";
import { SuggesterFuzzyMatchingEnum } from "./suggesterfuzzymatchingenum";
/**
 * Options for a search suggester.
**/
export declare class DocumentSuggesterOptions extends SpeakeasyBase {
    fuzzyMatching?: SuggesterFuzzyMatchingEnum;
    sortExpression?: string;
    sourceField: string;
}
