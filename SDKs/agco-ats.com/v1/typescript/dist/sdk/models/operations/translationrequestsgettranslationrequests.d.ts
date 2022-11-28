import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationRequestsGetTranslationRequestsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class TranslationRequestsGetTranslationRequestsRequest extends SpeakeasyBase {
    queryParams: TranslationRequestsGetTranslationRequestsQueryParams;
}
export declare class TranslationRequestsGetTranslationRequestsResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsTranslationRequest?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationRequest;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
