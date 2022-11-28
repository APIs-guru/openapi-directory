import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationKeysUpdateTranslationKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationKeysUpdateTranslationKeyRequests extends SpeakeasyBase {
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


export class TranslationKeysUpdateTranslationKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationKeysUpdateTranslationKeyPathParams;

  @SpeakeasyMetadata()
  request: TranslationKeysUpdateTranslationKeyRequests;
}


export class TranslationKeysUpdateTranslationKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
