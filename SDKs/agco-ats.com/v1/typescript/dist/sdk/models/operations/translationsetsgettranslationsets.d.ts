import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TranslationSetsGetTranslationSetsStateEnum {
    OutForProcessing = "OutForProcessing",
    Processing = "Processing",
    PendingApproval = "PendingApproval",
    OutForTranslation = "OutForTranslation",
    Cancelled = "Cancelled",
    Completed = "Completed"
}
export declare class TranslationSetsGetTranslationSetsQueryParams extends SpeakeasyBase {
    includeAttributes?: string;
    languageId?: number;
    limit?: number;
    offset?: number;
    state?: TranslationSetsGetTranslationSetsStateEnum;
    stringId?: string;
    translationRequestId?: number;
}
export declare class TranslationSetsGetTranslationSetsRequest extends SpeakeasyBase {
    queryParams: TranslationSetsGetTranslationSetsQueryParams;
}
export declare class TranslationSetsGetTranslationSetsResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsTranslationSet?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSet;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
