import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildSuggestersResponse
/** 
 * The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.
**/
export class BuildSuggestersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fieldNames?: string[];
}
