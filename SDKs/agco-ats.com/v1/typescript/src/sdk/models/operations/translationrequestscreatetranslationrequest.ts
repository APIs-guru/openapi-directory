import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationRequestsCreateTranslationRequestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsTranslationRequest1?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsTranslationRequest2?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TranslationRequestsCreateTranslationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: TranslationRequestsCreateTranslationRequestRequests;
}


export class TranslationRequestsCreateTranslationRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  translationRequestsCreateTranslationRequest200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  translationRequestsCreateTranslationRequest200TextJsonInt32Integer?: number;
}
