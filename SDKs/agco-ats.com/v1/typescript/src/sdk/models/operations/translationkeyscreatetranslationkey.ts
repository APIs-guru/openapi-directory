import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationKeysCreateTranslationKeyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  oasSupportSharedModelsTranslationKey1?: shared.OasSupportSharedModelsTranslationKey;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  oasSupportSharedModelsTranslationKey2?: shared.OasSupportSharedModelsTranslationKey;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TranslationKeysCreateTranslationKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: TranslationKeysCreateTranslationKeyRequests;
}


export class TranslationKeysCreateTranslationKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translationKeysCreateTranslationKey200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  translationKeysCreateTranslationKey200TextJsonInt32Integer?: number;
}
