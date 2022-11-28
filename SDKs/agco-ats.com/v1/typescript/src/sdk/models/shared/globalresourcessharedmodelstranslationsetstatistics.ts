import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalResourcesSharedModelsTranslationSetStatistics
/** 
 * Statistics for a translation set
**/
export class GlobalResourcesSharedModelsTranslationSetStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageIDs" })
  languageIDs?: number[];

  @SpeakeasyMetadata({ data: "json, name=StringCount" })
  stringCount?: number;
}
