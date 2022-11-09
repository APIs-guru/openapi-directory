import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguagesUpdateLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LocaleID" })
  localeId: number;
}


export class LanguagesUpdateLanguageRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsLanguage1?: shared.GlobalResourcesSharedModelsLanguage;

  @Metadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsLanguage2?: shared.GlobalResourcesSharedModelsLanguage;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LanguagesUpdateLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LanguagesUpdateLanguagePathParams;

  @Metadata()
  request: LanguagesUpdateLanguageRequests;
}


export class LanguagesUpdateLanguageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
