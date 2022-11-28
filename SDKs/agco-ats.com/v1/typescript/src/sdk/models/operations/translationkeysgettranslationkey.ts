import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationKeysGetTranslationKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationKeysGetTranslationKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationKeysGetTranslationKeyPathParams;
}


export class TranslationKeysGetTranslationKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  oasSupportSharedModelsTranslationKey?: shared.OasSupportSharedModelsTranslationKey;

  @SpeakeasyMetadata()
  statusCode: number;
}
