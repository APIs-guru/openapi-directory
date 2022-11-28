import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StringTranslationsGetTranslationsQueryParams extends SpeakeasyBase {
    limit?: number;
    modifiedAfterTimestamp?: string;
}
export declare class StringTranslationsGetTranslationsRequest extends SpeakeasyBase {
    queryParams: StringTranslationsGetTranslationsQueryParams;
}
export declare class StringTranslationsGetTranslationsResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsStringTranslation?: shared.ApiIPagedResponseGlobalResourcesSharedModelsStringTranslation;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
