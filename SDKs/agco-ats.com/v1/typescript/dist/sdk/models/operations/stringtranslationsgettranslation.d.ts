import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StringTranslationsGetTranslationPathParams extends SpeakeasyBase {
    languageId: number;
    stringId: string;
}
export declare class StringTranslationsGetTranslationRequest extends SpeakeasyBase {
    pathParams: StringTranslationsGetTranslationPathParams;
}
export declare class StringTranslationsGetTranslationResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsStringTranslation?: shared.GlobalResourcesSharedModelsStringTranslation;
    statusCode: number;
}
