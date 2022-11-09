import { SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyPhrase } from "./keyphrase";
/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export declare class BatchDetectKeyPhrasesItemResult extends SpeakeasyBase {
    index?: number;
    keyPhrases?: KeyPhrase[];
}
