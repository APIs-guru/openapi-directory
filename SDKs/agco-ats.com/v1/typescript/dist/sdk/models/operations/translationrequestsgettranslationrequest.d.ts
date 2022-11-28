import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationRequestsGetTranslationRequestPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationRequestsGetTranslationRequestRequest extends SpeakeasyBase {
    pathParams: TranslationRequestsGetTranslationRequestPathParams;
}
export declare class TranslationRequestsGetTranslationRequestResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;
    statusCode: number;
}
