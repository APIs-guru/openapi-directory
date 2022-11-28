import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsGetTranslationSetStringsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsGetTranslationSetStringsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class TranslationSetsGetTranslationSetStringsRequest extends SpeakeasyBase {
    pathParams: TranslationSetsGetTranslationSetStringsPathParams;
    queryParams: TranslationSetsGetTranslationSetStringsQueryParams;
}
export declare class TranslationSetsGetTranslationSetStringsResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsTranslationSetString?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetString;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
