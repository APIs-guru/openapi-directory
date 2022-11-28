import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OasSupportSharedModelsTranslationKey
/** 
 * A translation key to map the relationship of keyNames, usually for ODX, and string Ids
**/
export class OasSupportSharedModelsTranslationKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ID, form, name=ID;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=KeyName, form, name=KeyName;" })
  keyName: string;

  @SpeakeasyMetadata({ data: "json, name=StringID, form, name=StringID;" })
  stringId: string;
}
