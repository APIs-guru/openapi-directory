import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationContactInformationPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  authorizationCodesSharedModelsAuthorizationContactInformation?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  authorizationCodesSharedModelsAuthorizationContactInformation1?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @Metadata({ data: "request, media_type=text/json" })
  authorizationCodesSharedModelsAuthorizationContactInformation2?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AuthorizationContactInformationPostRequest extends SpeakeasyBase {
  @Metadata()
  request: AuthorizationContactInformationPostRequests;
}


export class AuthorizationContactInformationPostResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  authorizationContactInformationPost200ApplicationJsonInt32Integer?: number;

  @Metadata()
  authorizationContactInformationPost200TextJsonInt32Integer?: number;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
