import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LiteralOptions
/** 
 * Options that define a literal field in the search index.
**/
export class LiteralOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultValue?: string;

  @SpeakeasyMetadata()
  facetEnabled?: boolean;

  @SpeakeasyMetadata()
  resultEnabled?: boolean;

  @SpeakeasyMetadata()
  searchEnabled?: boolean;
}
