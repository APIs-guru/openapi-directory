import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StringTranslationsGetTranslationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=languageId" })
  languageId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stringId" })
  stringId: string;
}


export class StringTranslationsGetTranslationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StringTranslationsGetTranslationPathParams;
}


export class StringTranslationsGetTranslationResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsStringTranslation?: shared.GlobalResourcesSharedModelsStringTranslation;

  @Metadata()
  statusCode: number;
}
