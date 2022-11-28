import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticationDefaultRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsCredentials?: shared.ApiModelsCredentials;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsCredentials1?: shared.ApiModelsCredentials;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsCredentials2?: shared.ApiModelsCredentials;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationDefaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthenticationDefaultRequests;
}


export class AuthenticationDefaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsAuthenticatedUser?: shared.ApiModelsAuthenticatedUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
