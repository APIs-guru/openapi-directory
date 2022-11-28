import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StringTranslationsGetTranslationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedAfterTimestamp" })
  modifiedAfterTimestamp?: string;
}


export class StringTranslationsGetTranslationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StringTranslationsGetTranslationsQueryParams;
}


export class StringTranslationsGetTranslationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsStringTranslation?: shared.ApiIPagedResponseGlobalResourcesSharedModelsStringTranslation;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
