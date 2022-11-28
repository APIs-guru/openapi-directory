import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCodesDeleteAuthorizationCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesDeleteAuthorizationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCodesDeleteAuthorizationCodePathParams;
}


export class AuthorizationCodesDeleteAuthorizationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
