import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCodesValidateAuthorizationCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesValidateAuthorizationCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodesValidateAuthorizationCodePathParams;
}


export class AuthorizationCodesValidateAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  authorizationCodesSharedModelsCodeValidationModel?: shared.AuthorizationCodesSharedModelsCodeValidationModel;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
