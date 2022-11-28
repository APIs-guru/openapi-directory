import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAppsAppIdKeysKeyIdRevokePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;
}


export class PostAppsAppIdKeysKeyIdRevokeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdKeysKeyIdRevokeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdKeysKeyIdRevokePathParams;

  @SpeakeasyMetadata()
  security: PostAppsAppIdKeysKeyIdRevokeSecurity;
}


export class PostAppsAppIdKeysKeyIdRevokeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
