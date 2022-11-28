import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentSuggesterOptions } from "./documentsuggesteroptions";
/**
 * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>.
**/
export declare class Suggester extends SpeakeasyBase {
    documentSuggesterOptions: DocumentSuggesterOptions;
    suggesterName: string;
}
