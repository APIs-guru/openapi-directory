import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalResourcesSharedModelsTranslationSetString
/** 
 * The resulting translation in a translation set.  is the  to which the string will be translated.
**/
export class GlobalResourcesSharedModelsTranslationSetString extends SpeakeasyBase {
  @Metadata({ data: "json, name=LanguageID, form, name=LanguageID;" })
  languageId: number;

  @Metadata({ data: "json, name=StringID, form, name=StringID;" })
  stringId: string;

  @Metadata({ data: "json, name=StringValue, form, name=StringValue;" })
  stringValue?: string;

  @Metadata({ data: "json, name=TranslationSetId, form, name=TranslationSetId;" })
  translationSetId: number;
}
