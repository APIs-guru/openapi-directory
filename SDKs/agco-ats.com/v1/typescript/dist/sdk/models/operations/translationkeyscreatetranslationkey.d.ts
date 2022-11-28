import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationKeysCreateTranslationKeyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;
    oasSupportSharedModelsTranslationKey1?: shared.OasSupportSharedModelsTranslationKey;
    oasSupportSharedModelsTranslationKey2?: shared.OasSupportSharedModelsTranslationKey;
    textXml: Uint8Array;
}
export declare class TranslationKeysCreateTranslationKeyRequest extends SpeakeasyBase {
    request: TranslationKeysCreateTranslationKeyRequests;
}
export declare class TranslationKeysCreateTranslationKeyResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    translationKeysCreateTranslationKey200ApplicationJsonInt32Integer?: number;
    translationKeysCreateTranslationKey200TextJsonInt32Integer?: number;
}
