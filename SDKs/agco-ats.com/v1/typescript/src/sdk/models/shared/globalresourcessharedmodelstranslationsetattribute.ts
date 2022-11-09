import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalResourcesSharedModelsTranslationSetAttribute
/** 
 * An attribute of a
**/
export class GlobalResourcesSharedModelsTranslationSetAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name: string;

  @Metadata({ data: "json, name=TranslationSetID, form, name=TranslationSetID;" })
  translationSetId?: number;

  @Metadata({ data: "json, name=Value, form, name=Value;" })
  value?: string;
}
