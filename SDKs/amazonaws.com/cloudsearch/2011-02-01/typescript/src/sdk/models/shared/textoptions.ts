import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextOptions
/** 
 * Options that define a text field in the search index.
**/
export class TextOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  facetEnabled?: boolean;

  @SpeakeasyMetadata()
  resultEnabled?: boolean;

  @SpeakeasyMetadata()
  textProcessor?: string;
}
