import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LanguagesGetLanguagesQueryParams extends SpeakeasyBase {
    includeDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class LanguagesGetLanguagesRequest extends SpeakeasyBase {
    queryParams: LanguagesGetLanguagesQueryParams;
}
export declare class LanguagesGetLanguagesResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsLanguage?: shared.ApiIPagedResponseGlobalResourcesSharedModelsLanguage;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
