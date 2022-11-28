import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GlobalResourcesSharedModelsTranslationRequestStateEnum {
    NotSubmitted = "NotSubmitted",
    Submitted = "Submitted",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
/**
 * A request to translate specified strings into specified locales
**/
export declare class GlobalResourcesSharedModelsTranslationRequest extends SpeakeasyBase {
    approvalUserId?: number;
    ccEmailAddresses: string[];
    chargeToAccount: string;
    deadline: Date;
    id?: number;
    localeIds: number[];
    notes: string;
    questionsUserId?: number;
    state: GlobalResourcesSharedModelsTranslationRequestStateEnum;
    submittedBy?: number;
    translatorEmail?: string;
    translatorName?: string;
}
