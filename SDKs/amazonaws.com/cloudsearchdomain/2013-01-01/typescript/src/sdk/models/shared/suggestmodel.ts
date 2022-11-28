import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestionMatch } from "./suggestionmatch";



// SuggestModel
/** 
 * Container for the suggestion information returned in a <code>SuggestResponse</code>.
**/
export class SuggestModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=found" })
  found?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestions", elemType: SuggestionMatch })
  suggestions?: SuggestionMatch[];
}
