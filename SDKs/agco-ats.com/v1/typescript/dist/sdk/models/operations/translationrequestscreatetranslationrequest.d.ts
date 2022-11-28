import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationRequestsCreateTranslationRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;
    globalResourcesSharedModelsTranslationRequest1?: shared.GlobalResourcesSharedModelsTranslationRequest;
    globalResourcesSharedModelsTranslationRequest2?: shared.GlobalResourcesSharedModelsTranslationRequest;
    textXml: Uint8Array;
}
export declare class TranslationRequestsCreateTranslationRequestRequest extends SpeakeasyBase {
    request: TranslationRequestsCreateTranslationRequestRequests;
}
export declare class TranslationRequestsCreateTranslationRequestResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    translationRequestsCreateTranslationRequest200ApplicationJsonInt32Integer?: number;
    translationRequestsCreateTranslationRequest200TextJsonInt32Integer?: number;
}
