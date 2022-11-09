import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthenticationDefaultRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsCredentials?: shared.ApiModelsCredentials;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsCredentials1?: shared.ApiModelsCredentials;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsCredentials2?: shared.ApiModelsCredentials;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationDefaultRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthenticationDefaultRequests;
}


export class AuthenticationDefaultResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsAuthenticatedUser?: shared.ApiModelsAuthenticatedUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
