import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DominantLanguage } from "./dominantlanguage";



// BatchDetectDominantLanguageItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectDominantLanguageItemResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=Languages", elemType: DominantLanguage })
  languages?: DominantLanguage[];
}
