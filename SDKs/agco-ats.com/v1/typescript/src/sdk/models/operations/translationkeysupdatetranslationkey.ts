import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationKeysUpdateTranslationKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationKeysUpdateTranslationKeyRequests extends SpeakeasyBase {
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


export class TranslationKeysUpdateTranslationKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationKeysUpdateTranslationKeyPathParams;

  @Metadata()
  request: TranslationKeysUpdateTranslationKeyRequests;
}


export class TranslationKeysUpdateTranslationKeyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
