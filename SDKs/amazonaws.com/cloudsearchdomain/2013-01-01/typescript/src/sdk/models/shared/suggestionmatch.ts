import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuggestionMatch
/** 
 * An autocomplete suggestion that matches the query string specified in a <code>SuggestRequest</code>. 
**/
export class SuggestionMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
