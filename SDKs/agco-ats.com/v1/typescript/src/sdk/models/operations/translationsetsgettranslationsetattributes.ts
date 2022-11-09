import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationSetsGetTranslationSetAttributesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetTranslationSetAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class TranslationSetsGetTranslationSetAttributesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsGetTranslationSetAttributesPathParams;

  @Metadata()
  queryParams: TranslationSetsGetTranslationSetAttributesQueryParams;
}


export class TranslationSetsGetTranslationSetAttributesResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute?: shared.ApiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
