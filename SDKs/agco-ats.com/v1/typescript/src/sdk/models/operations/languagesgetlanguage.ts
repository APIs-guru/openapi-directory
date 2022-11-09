import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguagesGetLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LocaleID" })
  localeId: number;
}


export class LanguagesGetLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LanguagesGetLanguagePathParams;
}


export class LanguagesGetLanguageResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;

  @Metadata()
  statusCode: number;
}
