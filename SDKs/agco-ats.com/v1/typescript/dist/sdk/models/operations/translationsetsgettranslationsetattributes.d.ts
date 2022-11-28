import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsGetTranslationSetAttributesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsGetTranslationSetAttributesQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class TranslationSetsGetTranslationSetAttributesRequest extends SpeakeasyBase {
    pathParams: TranslationSetsGetTranslationSetAttributesPathParams;
    queryParams: TranslationSetsGetTranslationSetAttributesQueryParams;
}
export declare class TranslationSetsGetTranslationSetAttributesResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
