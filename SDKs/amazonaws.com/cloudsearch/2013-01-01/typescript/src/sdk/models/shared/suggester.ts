import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentSuggesterOptions } from "./documentsuggesteroptions";



// Suggester
/** 
 * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. 
**/
export class Suggester extends SpeakeasyBase {
  @SpeakeasyMetadata()
  documentSuggesterOptions: DocumentSuggesterOptions;

  @SpeakeasyMetadata()
  suggesterName: string;
}
