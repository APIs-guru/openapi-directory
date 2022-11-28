import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalResourcesSharedModelsTranslationSetString
/** 
 * The resulting translation in a translation set.  is the  to which the string will be translated.
**/
export class GlobalResourcesSharedModelsTranslationSetString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LanguageID, form, name=LanguageID;" })
  languageId: number;

  @SpeakeasyMetadata({ data: "json, name=StringID, form, name=StringID;" })
  stringId: string;

  @SpeakeasyMetadata({ data: "json, name=StringValue, form, name=StringValue;" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=TranslationSetId, form, name=TranslationSetId;" })
  translationSetId: number;
}
