import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationRequestsGetTranslationRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationRequestsGetTranslationRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TranslationRequestsGetTranslationRequestsQueryParams;
}


export class TranslationRequestsGetTranslationRequestsResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationRequest?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationRequest;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
