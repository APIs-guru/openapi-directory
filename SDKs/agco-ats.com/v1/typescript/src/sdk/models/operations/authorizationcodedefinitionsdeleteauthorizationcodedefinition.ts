import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams;
}


export class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
