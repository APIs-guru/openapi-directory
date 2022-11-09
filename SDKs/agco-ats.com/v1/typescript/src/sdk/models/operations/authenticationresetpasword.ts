import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticationResetPaswordRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsPasswordReset?: shared.ApiModelsPasswordReset;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsPasswordReset1?: shared.ApiModelsPasswordReset;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsPasswordReset2?: shared.ApiModelsPasswordReset;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationResetPaswordRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthenticationResetPaswordRequests;
}


export class AuthenticationResetPaswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
