import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsGetSourceStringsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsGetSourceStringsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class TranslationSetsGetSourceStringsRequest extends SpeakeasyBase {
    pathParams: TranslationSetsGetSourceStringsPathParams;
    queryParams: TranslationSetsGetSourceStringsQueryParams;
}
export declare class TranslationSetsGetSourceStringsResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
