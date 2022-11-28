import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationKeysGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyNames" })
  keyNames?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationKeysGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TranslationKeysGetQueryParams;
}


export class TranslationKeysGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseOasSupportSharedModelsTranslationKey?: shared.ApiIPagedResponseOasSupportSharedModelsTranslationKey;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
