import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams;
}


export class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
