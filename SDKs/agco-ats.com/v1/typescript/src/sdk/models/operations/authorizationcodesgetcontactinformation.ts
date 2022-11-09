import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCodesGetContactInformationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesGetContactInformationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodesGetContactInformationPathParams;
}


export class AuthorizationCodesGetContactInformationResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  authorizationCodesSharedModelsAuthorizationContactInformation?: shared.AuthorizationCodesSharedModelsAuthorizationContactInformation;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
