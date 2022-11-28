import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LanguagesCreateLanguageRequests extends SpeakeasyBase {
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


export class LanguagesCreateLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: LanguagesCreateLanguageRequests;
}


export class LanguagesCreateLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  languagesCreateLanguage200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  languagesCreateLanguage200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
