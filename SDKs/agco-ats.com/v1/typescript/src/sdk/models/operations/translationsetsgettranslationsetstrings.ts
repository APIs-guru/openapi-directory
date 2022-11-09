import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationSetsGetTranslationSetStringsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetTranslationSetStringsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationSetsGetTranslationSetStringsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsGetTranslationSetStringsPathParams;

  @Metadata()
  queryParams: TranslationSetsGetTranslationSetStringsQueryParams;
}


export class TranslationSetsGetTranslationSetStringsResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSetString?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetString;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
