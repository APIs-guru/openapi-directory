import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggesterFuzzyMatchingEnum } from "./suggesterfuzzymatchingenum";



// DocumentSuggesterOptions
/** 
 * Options for a search suggester.
**/
export class DocumentSuggesterOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fuzzyMatching?: SuggesterFuzzyMatchingEnum;

  @SpeakeasyMetadata()
  sortExpression?: string;

  @SpeakeasyMetadata()
  sourceField: string;
}
