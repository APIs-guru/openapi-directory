import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GlobalResourcesSharedModelsStringTranslationStateEnum {
    Original = "Original",
    Requested = "Requested",
    Processing = "Processing",
    Processed = "Processed",
    Validated = "Validated",
    Invalidated = "Invalidated",
    RequestPending = "RequestPending",
    CreatePending = "CreatePending"
}


// GlobalResourcesSharedModelsStringTranslation
/** 
 * A translation of a string in a specific language
**/
export class GlobalResourcesSharedModelsStringTranslation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorId, form, name=AuthorId;" })
  authorId?: number;

  @SpeakeasyMetadata({ data: "json, name=LanguageId, form, name=LanguageId;" })
  languageId?: number;

  @SpeakeasyMetadata({ data: "json, name=State, form, name=State;" })
  state?: GlobalResourcesSharedModelsStringTranslationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StringId, form, name=StringId;" })
  stringId?: string;

  @SpeakeasyMetadata({ data: "json, name=StringValue, form, name=StringValue;" })
  stringValue: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp, form, name=Timestamp;" })
  timestamp?: string;
}
