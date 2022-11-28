import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryDetails } from "./categorydetails";



// Categories
/** 
 * Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
**/
export class Categories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MatchedCategories" })
  matchedCategories: string[];

  @SpeakeasyMetadata({ data: "json, name=MatchedDetails", elemType: CategoryDetails })
  matchedDetails: Map<string, CategoryDetails>;
}
