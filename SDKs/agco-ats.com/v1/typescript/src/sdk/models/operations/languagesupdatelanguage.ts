import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LanguagesUpdateLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LocaleID" })
  localeId: number;
}


export class LanguagesUpdateLanguageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsLanguage?: shared.GlobalResourcesSharedModelsLanguage;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsLanguage1?: shared.GlobalResourcesSharedModelsLanguage;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsLanguage2?: shared.GlobalResourcesSharedModelsLanguage;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class LanguagesUpdateLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LanguagesUpdateLanguagePathParams;

  @SpeakeasyMetadata()
  request: LanguagesUpdateLanguageRequests;
}


export class LanguagesUpdateLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
