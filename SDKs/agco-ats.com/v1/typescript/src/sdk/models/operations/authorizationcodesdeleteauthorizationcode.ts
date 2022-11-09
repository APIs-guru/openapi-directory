import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodesDeleteAuthorizationCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class AuthorizationCodesDeleteAuthorizationCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodesDeleteAuthorizationCodePathParams;
}


export class AuthorizationCodesDeleteAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
