import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GlobalResourcesSharedModelsStringTranslationStateEnum {
    Original = "Original",
    Requested = "Requested",
    Processing = "Processing",
    Processed = "Processed",
    Validated = "Validated",
    Invalidated = "Invalidated",
    RequestPending = "RequestPending",
    CreatePending = "CreatePending"
}
/**
 * A translation of a string in a specific language
**/
export declare class GlobalResourcesSharedModelsStringTranslation extends SpeakeasyBase {
    authorId?: number;
    languageId?: number;
    state?: GlobalResourcesSharedModelsStringTranslationStateEnum;
    stringId?: string;
    stringValue: string;
    timestamp?: string;
}
