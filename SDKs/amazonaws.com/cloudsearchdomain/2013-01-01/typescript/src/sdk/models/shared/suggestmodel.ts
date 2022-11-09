import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestionMatch } from "./suggestionmatch";


// SuggestModel
/** 
 * Container for the suggestion information returned in a <code>SuggestResponse</code>.
**/
export class SuggestModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=found" })
  found?: number;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=suggestions", elemType: shared.SuggestionMatch })
  suggestions?: SuggestionMatch[];
}
