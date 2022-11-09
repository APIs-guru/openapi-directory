import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryDetails } from "./categorydetails";


// Categories
/** 
 * Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
**/
export class Categories extends SpeakeasyBase {
  @Metadata({ data: "json, name=MatchedCategories" })
  matchedCategories: string[];

  @Metadata({ data: "json, name=MatchedDetails", elemType: shared.CategoryDetails })
  matchedDetails: Map<string, CategoryDetails>;
}
