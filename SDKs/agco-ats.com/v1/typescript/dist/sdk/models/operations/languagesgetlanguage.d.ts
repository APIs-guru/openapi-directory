import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LanguagesGetLanguagePathParams extends SpeakeasyBase {
    localeId: number;
}
export declare class LanguagesGetLanguageRequest extends SpeakeasyBase {
    pathParams: LanguagesGetLanguagePathParams;
}
export declare class LanguagesGetLanguageResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;
    statusCode: number;
}
