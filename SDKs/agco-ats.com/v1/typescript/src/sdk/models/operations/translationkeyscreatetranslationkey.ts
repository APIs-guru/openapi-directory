import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationKeysCreateTranslationKeyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  oasSupportSharedModelsTranslationKey1?: shared.OasSupportSharedModelsTranslationKey;

  @Metadata({ data: "request, media_type=text/json" })
  oasSupportSharedModelsTranslationKey2?: shared.OasSupportSharedModelsTranslationKey;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TranslationKeysCreateTranslationKeyRequest extends SpeakeasyBase {
  @Metadata()
  request: TranslationKeysCreateTranslationKeyRequests;
}


export class TranslationKeysCreateTranslationKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  translationKeysCreateTranslationKey200ApplicationJsonInt32Integer?: number;

  @Metadata()
  translationKeysCreateTranslationKey200TextJsonInt32Integer?: number;
}
