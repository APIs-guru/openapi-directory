import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DominantLanguage } from "./dominantlanguage";


// BatchDetectDominantLanguageItemResult
/** 
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export class BatchDetectDominantLanguageItemResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=Languages", elemType: shared.DominantLanguage })
  languages?: DominantLanguage[];
}
