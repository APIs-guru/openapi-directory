import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryDetails } from "./categorydetails";
/**
 * Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
**/
export declare class Categories extends SpeakeasyBase {
    matchedCategories: string[];
    matchedDetails: Map<string, CategoryDetails>;
}
