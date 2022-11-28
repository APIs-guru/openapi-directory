import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationKeysGetTranslationKeyPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationKeysGetTranslationKeyRequest extends SpeakeasyBase {
    pathParams: TranslationKeysGetTranslationKeyPathParams;
}
export declare class TranslationKeysGetTranslationKeyResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;
    statusCode: number;
}
