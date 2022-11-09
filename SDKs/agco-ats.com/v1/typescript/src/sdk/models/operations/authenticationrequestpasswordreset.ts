import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticationRequestPasswordResetRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsPasswordResetRequest?: shared.ApiModelsPasswordResetRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsPasswordResetRequest1?: shared.ApiModelsPasswordResetRequest;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsPasswordResetRequest2?: shared.ApiModelsPasswordResetRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationRequestPasswordResetRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthenticationRequestPasswordResetRequests;
}


export class AuthenticationRequestPasswordResetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
