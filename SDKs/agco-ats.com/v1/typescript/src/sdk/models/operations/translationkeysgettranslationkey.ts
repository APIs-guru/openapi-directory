import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationKeysGetTranslationKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationKeysGetTranslationKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationKeysGetTranslationKeyPathParams;
}


export class TranslationKeysGetTranslationKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;

  @Metadata()
  statusCode: number;
}
