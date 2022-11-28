import { SpeakeasyBase } from "../../../internal/utils";
import { SynonymOptionsStatus } from "./synonymoptionsstatus";
/**
 * A response message that contains the synonym options for a search domain.
**/
export declare class DescribeSynonymOptionsResponse extends SpeakeasyBase {
    synonyms: SynonymOptionsStatus;
}
