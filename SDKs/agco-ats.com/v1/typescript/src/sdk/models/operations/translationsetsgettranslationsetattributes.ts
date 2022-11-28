import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsGetTranslationSetAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetTranslationSetAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationSetsGetTranslationSetAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsGetTranslationSetAttributesPathParams;

  @SpeakeasyMetadata()
  queryParams: TranslationSetsGetTranslationSetAttributesQueryParams;
}


export class TranslationSetsGetTranslationSetAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
