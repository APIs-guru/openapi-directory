import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LanguagesCreateLanguageRequests extends SpeakeasyBase {
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


export class LanguagesCreateLanguageRequest extends SpeakeasyBase {
  @Metadata()
  request: LanguagesCreateLanguageRequests;
}


export class LanguagesCreateLanguageResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  languagesCreateLanguage200ApplicationJsonInt32Integer?: number;

  @Metadata()
  languagesCreateLanguage200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
