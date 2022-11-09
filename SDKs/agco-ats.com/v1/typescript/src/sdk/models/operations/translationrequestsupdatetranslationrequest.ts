import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TranslationRequestsUpdateTranslationRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: number;
}


export class TranslationRequestsUpdateTranslationRequestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=doResendRequest" })
  doResendRequest?: boolean;
}


export class TranslationRequestsUpdateTranslationRequestRequests extends SpeakeasyBase {
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


export class TranslationRequestsUpdateTranslationRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TranslationRequestsUpdateTranslationRequestPathParams;

  @Metadata()
  queryParams: TranslationRequestsUpdateTranslationRequestQueryParams;

  @Metadata()
  request: TranslationRequestsUpdateTranslationRequestRequests;
}


export class TranslationRequestsUpdateTranslationRequestResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
