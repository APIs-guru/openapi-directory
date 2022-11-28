import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationRequestsGetTranslationRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationRequestsGetTranslationRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TranslationRequestsGetTranslationRequestsQueryParams;
}


export class TranslationRequestsGetTranslationRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationRequest?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationRequest;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
