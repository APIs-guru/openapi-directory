import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationRequestsGetTranslationRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: number;
}


export class TranslationRequestsGetTranslationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationRequestsGetTranslationRequestPathParams;
}


export class TranslationRequestsGetTranslationRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @SpeakeasyMetadata()
  statusCode: number;
}
