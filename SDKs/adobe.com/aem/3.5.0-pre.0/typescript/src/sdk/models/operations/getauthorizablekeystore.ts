import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAuthorizableKeystorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" })
  authorizableId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" })
  intermediatePath: string;
}


export class GetAuthorizableKeystoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAuthorizableKeystorePathParams;
}


export class GetAuthorizableKeystoreResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAuthorizableKeystoreDefaultTextPlainString?: string;
}
