import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationSetsGetSourceStringsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetSourceStringsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationSetsGetSourceStringsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsGetSourceStringsPathParams;

  @Metadata()
  queryParams: TranslationSetsGetSourceStringsQueryParams;
}


export class TranslationSetsGetSourceStringsResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
