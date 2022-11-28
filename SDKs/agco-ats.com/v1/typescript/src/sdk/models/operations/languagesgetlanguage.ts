import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LanguagesGetLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LocaleID" })
  localeId: number;
}


export class LanguagesGetLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LanguagesGetLanguagePathParams;
}


export class LanguagesGetLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;

  @SpeakeasyMetadata()
  statusCode: number;
}
