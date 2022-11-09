import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCodesGetAuthorizationCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesGetAuthorizationCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodesGetAuthorizationCodePathParams;
}


export class AuthorizationCodesGetAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  authorizationCodesSharedModelsAuthorizationCode?: shared.AuthorizationCodesSharedModelsAuthorizationCode;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
