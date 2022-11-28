import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options that define a text field in the search index.
**/
export declare class TextOptions extends SpeakeasyBase {
    defaultValue?: string;
    facetEnabled?: boolean;
    resultEnabled?: boolean;
    textProcessor?: string;
}
