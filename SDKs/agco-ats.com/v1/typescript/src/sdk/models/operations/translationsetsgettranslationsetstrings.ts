import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsGetTranslationSetStringsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetTranslationSetStringsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationSetsGetTranslationSetStringsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsGetTranslationSetStringsPathParams;

  @SpeakeasyMetadata()
  queryParams: TranslationSetsGetTranslationSetStringsQueryParams;
}


export class TranslationSetsGetTranslationSetStringsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSetString?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetString;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
