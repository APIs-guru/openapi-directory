import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalResourcesSharedModelsTranslationSetStatistics
/** 
 * Statistics for a translation set
**/
export class GlobalResourcesSharedModelsTranslationSetStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageIDs" })
  languageIDs?: number[];

  @Metadata({ data: "json, name=StringCount" })
  stringCount?: number;
}
