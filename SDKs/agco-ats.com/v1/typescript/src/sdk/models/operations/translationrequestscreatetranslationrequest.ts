import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationRequestsCreateTranslationRequestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  globalResourcesSharedModelsTranslationRequest1?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @Metadata({ data: "request, media_type=text/json" })
  globalResourcesSharedModelsTranslationRequest2?: shared.GlobalResourcesSharedModelsTranslationRequest;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TranslationRequestsCreateTranslationRequestRequest extends SpeakeasyBase {
  @Metadata()
  request: TranslationRequestsCreateTranslationRequestRequests;
}


export class TranslationRequestsCreateTranslationRequestResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  translationRequestsCreateTranslationRequest200ApplicationJsonInt32Integer?: number;

  @Metadata()
  translationRequestsCreateTranslationRequest200TextJsonInt32Integer?: number;
}
