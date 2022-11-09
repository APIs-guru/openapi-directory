import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationSetsGetTranslationSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetTranslationSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;
}


export class TranslationSetsGetTranslationSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationSetsGetTranslationSetPathParams;

  @Metadata()
  queryParams: TranslationSetsGetTranslationSetQueryParams;
}


export class TranslationSetsGetTranslationSetResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsTranslationSet?: shared.GlobalResourcesSharedModelsTranslationSet;

  @Metadata()
  statusCode: number;
}
