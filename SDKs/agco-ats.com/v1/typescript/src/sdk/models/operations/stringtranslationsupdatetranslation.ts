import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StringTranslationsUpdateTranslationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=languageId" })
  languageId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stringId" })
  stringId: string;
}


export class StringTranslationsUpdateTranslationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsStringTranslation?: shared.GlobalResourcesSharedModelsStringTranslation;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsStringTranslation1?: shared.GlobalResourcesSharedModelsStringTranslation;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsStringTranslation2?: shared.GlobalResourcesSharedModelsStringTranslation;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class StringTranslationsUpdateTranslationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StringTranslationsUpdateTranslationPathParams;

  @SpeakeasyMetadata()
  request: StringTranslationsUpdateTranslationRequests;
}


export class StringTranslationsUpdateTranslationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
