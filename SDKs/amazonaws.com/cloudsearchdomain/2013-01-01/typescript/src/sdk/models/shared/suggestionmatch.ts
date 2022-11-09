import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuggestionMatch
/** 
 * An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>. 
**/
export class SuggestionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
