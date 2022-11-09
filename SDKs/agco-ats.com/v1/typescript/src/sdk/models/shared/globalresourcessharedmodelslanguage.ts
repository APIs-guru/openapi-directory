import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlobalResourcesSharedModelsLanguage
/** 
 * A language used for string translations.
**/
export class GlobalResourcesSharedModelsLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description: string;

  @Metadata({ data: "json, name=IsDeleted, form, name=IsDeleted;" })
  isDeleted?: boolean;

  @Metadata({ data: "json, name=LocaleId, form, name=LocaleId;" })
  localeId: number;
}
