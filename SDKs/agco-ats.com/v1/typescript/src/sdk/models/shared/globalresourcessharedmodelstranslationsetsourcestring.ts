import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalResourcesSharedModelsTranslationSetSourceString
/** 
 * Information needed to translate a string in a translation set
**/
export class GlobalResourcesSharedModelsTranslationSetSourceString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DescriptionForTranslator" })
  descriptionForTranslator?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageID" })
  languageId?: number;

  @SpeakeasyMetadata({ data: "json, name=StringID" })
  stringId?: string;

  @SpeakeasyMetadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
