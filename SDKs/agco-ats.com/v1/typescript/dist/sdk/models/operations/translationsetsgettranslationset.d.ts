import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsGetTranslationSetPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsGetTranslationSetQueryParams extends SpeakeasyBase {
    includeAttributes?: string;
}
export declare class TranslationSetsGetTranslationSetRequest extends SpeakeasyBase {
    pathParams: TranslationSetsGetTranslationSetPathParams;
    queryParams: TranslationSetsGetTranslationSetQueryParams;
}
export declare class TranslationSetsGetTranslationSetResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsTranslationSet?: shared.GlobalResourcesSharedModelsTranslationSet;
    statusCode: number;
}
