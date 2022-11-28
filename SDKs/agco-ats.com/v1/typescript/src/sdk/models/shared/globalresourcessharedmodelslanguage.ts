import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalResourcesSharedModelsLanguage
/** 
 * A language used for string translations.
**/
export class GlobalResourcesSharedModelsLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=IsDeleted, form, name=IsDeleted;" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LocaleId, form, name=LocaleId;" })
  localeId: number;
}
