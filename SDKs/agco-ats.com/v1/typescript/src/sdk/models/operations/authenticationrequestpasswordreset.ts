import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticationRequestPasswordResetRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsPasswordResetRequest?: shared.ApiModelsPasswordResetRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsPasswordResetRequest1?: shared.ApiModelsPasswordResetRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsPasswordResetRequest2?: shared.ApiModelsPasswordResetRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationRequestPasswordResetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthenticationRequestPasswordResetRequests;
}


export class AuthenticationRequestPasswordResetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
