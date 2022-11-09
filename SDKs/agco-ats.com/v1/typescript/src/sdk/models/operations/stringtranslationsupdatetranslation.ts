import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StringTranslationsUpdateTranslationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=languageId" })
  languageId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stringId" })
  stringId: string;
}


export class StringTranslationsUpdateTranslationRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsStringTranslation?: shared.GlobalResourcesSharedModelsStringTranslation;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsStringTranslation1?: shared.GlobalResourcesSharedModelsStringTranslation;

  @Metadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsStringTranslation2?: shared.GlobalResourcesSharedModelsStringTranslation;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class StringTranslationsUpdateTranslationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StringTranslationsUpdateTranslationPathParams;

  @Metadata()
  request: StringTranslationsUpdateTranslationRequests;
}


export class StringTranslationsUpdateTranslationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
