import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DominantLanguage } from "./dominantlanguage";
/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export declare class BatchDetectDominantLanguageItemResult extends SpeakeasyBase {
    index?: number;
    languages?: DominantLanguage[];
}
