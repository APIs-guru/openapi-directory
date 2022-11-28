import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationContactInformationPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  authorizationCodesSharedModelsAuthorizationContactInformation?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  authorizationCodesSharedModelsAuthorizationContactInformation1?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  authorizationCodesSharedModelsAuthorizationContactInformation2?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthorizationContactInformationPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AuthorizationContactInformationPostRequests;
}


export class AuthorizationContactInformationPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  authorizationContactInformationPost200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  authorizationContactInformationPost200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
