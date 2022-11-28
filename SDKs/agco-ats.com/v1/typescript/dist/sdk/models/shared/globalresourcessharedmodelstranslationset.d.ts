import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalResourcesSharedModelsTranslationSetAttribute } from "./globalresourcessharedmodelstranslationsetattribute";
export declare enum GlobalResourcesSharedModelsTranslationSetStateEnum {
    OutForProcessing = "OutForProcessing",
    Processing = "Processing",
    PendingApproval = "PendingApproval",
    OutForTranslation = "OutForTranslation",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
/**
 * A set of strings submitted for translation
**/
export declare class GlobalResourcesSharedModelsTranslationSet extends SpeakeasyBase {
    attributes?: GlobalResourcesSharedModelsTranslationSetAttribute[];
    fileIDs: string[];
    id?: number;
    inDate?: Date;
    notes?: string;
    outDate?: Date;
    state: GlobalResourcesSharedModelsTranslationSetStateEnum;
    translationRequestId?: number;
}
