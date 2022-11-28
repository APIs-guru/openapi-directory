import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LanguagesCreateLanguageRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;
    globalResourcesSharedModelsLanguage1?: shared.GlobalResourcesSharedModelsLanguage;
    globalResourcesSharedModelsLanguage2?: shared.GlobalResourcesSharedModelsLanguage;
    textXml: Uint8Array;
}
export declare class LanguagesCreateLanguageRequest extends SpeakeasyBase {
    request: LanguagesCreateLanguageRequests;
}
export declare class LanguagesCreateLanguageResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    languagesCreateLanguage200ApplicationJsonInt32Integer?: number;
    languagesCreateLanguage200TextJsonInt32Integer?: number;
    statusCode: number;
}
