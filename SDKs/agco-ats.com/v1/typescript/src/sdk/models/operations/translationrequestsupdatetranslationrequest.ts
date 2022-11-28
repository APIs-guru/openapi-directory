import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TranslationRequestsUpdateTranslationRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: number;
}


export class TranslationRequestsUpdateTranslationRequestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doResendRequest" })
  doResendRequest?: boolean;
}


export class TranslationRequestsUpdateTranslationRequestRequests extends SpeakeasyBase {
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


export class TranslationRequestsUpdateTranslationRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TranslationRequestsUpdateTranslationRequestPathParams;

  @SpeakeasyMetadata()
  queryParams: TranslationRequestsUpdateTranslationRequestQueryParams;

  @SpeakeasyMetadata()
  request: TranslationRequestsUpdateTranslationRequestRequests;
}


export class TranslationRequestsUpdateTranslationRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
