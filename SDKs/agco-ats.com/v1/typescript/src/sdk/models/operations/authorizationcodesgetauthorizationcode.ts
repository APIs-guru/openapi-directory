import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCodesGetAuthorizationCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesGetAuthorizationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCodesGetAuthorizationCodePathParams;
}


export class AuthorizationCodesGetAuthorizationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  authorizationCodesSharedModelsAuthorizationCode?: shared.AuthorizationCodesSharedModelsAuthorizationCode;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
