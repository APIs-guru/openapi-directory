import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAppsAppIdKeysKeyIdRevokePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;
}


export class PostAppsAppIdKeysKeyIdRevokeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdKeysKeyIdRevokeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdKeysKeyIdRevokePathParams;

  @Metadata()
  security: PostAppsAppIdKeysKeyIdRevokeSecurity;
}


export class PostAppsAppIdKeysKeyIdRevokeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
