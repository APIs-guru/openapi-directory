import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StringTranslationsGetTranslationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modifiedAfterTimestamp" })
  modifiedAfterTimestamp?: string;
}


export class StringTranslationsGetTranslationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StringTranslationsGetTranslationsQueryParams;
}


export class StringTranslationsGetTranslationsResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsStringTranslation?: shared.ApiIPagedResponseGlobalResourcesSharedModelsStringTranslation;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
