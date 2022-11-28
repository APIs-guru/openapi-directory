import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LanguagesUpdateLanguagePathParams extends SpeakeasyBase {
    localeId: number;
}
export declare class LanguagesUpdateLanguageRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;
    globalResourcesSharedModelsLanguage1?: shared.GlobalResourcesSharedModelsLanguage;
    globalResourcesSharedModelsLanguage2?: shared.GlobalResourcesSharedModelsLanguage;
    textXml: Uint8Array;
}
export declare class LanguagesUpdateLanguageRequest extends SpeakeasyBase {
    pathParams: LanguagesUpdateLanguagePathParams;
    request: LanguagesUpdateLanguageRequests;
}
export declare class LanguagesUpdateLanguageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
