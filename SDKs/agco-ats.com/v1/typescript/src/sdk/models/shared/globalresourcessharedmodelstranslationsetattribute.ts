import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalResourcesSharedModelsTranslationSetAttribute
/** 
 * An attribute of a
**/
export class GlobalResourcesSharedModelsTranslationSetAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=TranslationSetID, form, name=TranslationSetID;" })
  translationSetId?: number;

  @SpeakeasyMetadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
