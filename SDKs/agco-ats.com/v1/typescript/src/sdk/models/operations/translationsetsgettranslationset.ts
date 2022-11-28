import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationSetsGetTranslationSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: number;
}


export class TranslationSetsGetTranslationSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;
}


export class TranslationSetsGetTranslationSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationSetsGetTranslationSetPathParams;

  @SpeakeasyMetadata()
  queryParams: TranslationSetsGetTranslationSetQueryParams;
}


export class TranslationSetsGetTranslationSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsTranslationSet?: shared.GlobalResourcesSharedModelsTranslationSet;

  @SpeakeasyMetadata()
  statusCode: number;
}
