import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsGetSourceStringsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetSourceStringsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationSetsGetSourceStringsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsGetSourceStringsPathParams;

  @SpeakeasyMetadata()
  queryParams: TranslationSetsGetSourceStringsQueryParams;
}


export class TranslationSetsGetSourceStringsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
