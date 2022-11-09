import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalResourcesSharedModelsTranslationSetSourceString
/** 
 * Information needed to translate a string in a translation set
**/
export class GlobalResourcesSharedModelsTranslationSetSourceString extends SpeakeasyBase {
  @Metadata({ data: "json, name=DescriptionForTranslator" })
  descriptionForTranslator?: string;

  @Metadata({ data: "json, name=LanguageID" })
  languageId?: number;

  @Metadata({ data: "json, name=StringID" })
  stringId?: string;

  @Metadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
