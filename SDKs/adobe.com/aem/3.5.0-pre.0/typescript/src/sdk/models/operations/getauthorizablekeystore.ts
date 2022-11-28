import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAuthorizableKeystorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" })
  authorizableId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" })
  intermediatePath: string;
}


export class GetAuthorizableKeystoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAuthorizableKeystorePathParams;
}


export class GetAuthorizableKeystoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAuthorizableKeystoreDefaultTextPlainString?: string;
}
