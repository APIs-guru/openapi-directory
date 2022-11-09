import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationRequestsGetTranslationRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: number;
}


export class TranslationRequestsGetTranslationRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationRequestsGetTranslationRequestPathParams;
}


export class TranslationRequestsGetTranslationRequestResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @Metadata()
  statusCode: number;
}
