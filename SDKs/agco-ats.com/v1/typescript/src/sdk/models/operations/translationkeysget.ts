import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationKeysGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=keyNames" })
  keyNames?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationKeysGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TranslationKeysGetQueryParams;
}


export class TranslationKeysGetResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseOasSupportSharedModelsTranslationKey?: shared.ApiIPagedResponseOasSupportSharedModelsTranslationKey;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
