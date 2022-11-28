import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StringTranslationsGetTranslationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=languageId" })
  languageId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stringId" })
  stringId: string;
}


export class StringTranslationsGetTranslationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StringTranslationsGetTranslationPathParams;
}


export class StringTranslationsGetTranslationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsStringTranslation?: shared.GlobalResourcesSharedModelsStringTranslation;

  @SpeakeasyMetadata()
  statusCode: number;
}
