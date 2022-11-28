import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthenticationResetPaswordRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsPasswordReset?: shared.ApiModelsPasswordReset;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsPasswordReset1?: shared.ApiModelsPasswordReset;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsPasswordReset2?: shared.ApiModelsPasswordReset;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthenticationResetPaswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthenticationResetPaswordRequests;
}


export class AuthenticationResetPaswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
