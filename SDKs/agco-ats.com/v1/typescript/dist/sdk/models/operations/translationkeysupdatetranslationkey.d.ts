import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationKeysUpdateTranslationKeyPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationKeysUpdateTranslationKeyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;
    oasSupportSharedModelsTranslationKey1?: shared.OasSupportSharedModelsTranslationKey;
    oasSupportSharedModelsTranslationKey2?: shared.OasSupportSharedModelsTranslationKey;
    textXml: Uint8Array;
}
export declare class TranslationKeysUpdateTranslationKeyRequest extends SpeakeasyBase {
    pathParams: TranslationKeysUpdateTranslationKeyPathParams;
    request: TranslationKeysUpdateTranslationKeyRequests;
}
export declare class TranslationKeysUpdateTranslationKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
