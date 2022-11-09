import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GlobalResourcesSharedModelsStringTranslationStateEnum {
    Original = "Original"
,    Requested = "Requested"
,    Processing = "Processing"
,    Processed = "Processed"
,    Validated = "Validated"
,    Invalidated = "Invalidated"
,    RequestPending = "RequestPending"
,    CreatePending = "CreatePending"
}


// GlobalResourcesSharedModelsStringTranslation
/** 
 * A translation of a string in a specific language
**/
export class GlobalResourcesSharedModelsStringTranslation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorId, form, name=AuthorId;" })
  authorId?: number;

  @Metadata({ data: "json, name=LanguageId, form, name=LanguageId;" })
  languageId?: number;

  @Metadata({ data: "json, name=State, form, name=State;" })
  state?: GlobalResourcesSharedModelsStringTranslationStateEnum;

  @Metadata({ data: "json, name=StringId, form, name=StringId;" })
  stringId?: string;

  @Metadata({ data: "json, name=StringValue, form, name=StringValue;" })
  stringValue: string;

  @Metadata({ data: "json, name=Timestamp, form, name=Timestamp;" })
  timestamp?: string;
}
