import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAppsAppIdKeysKeyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;
}


export class PatchAppsAppIdKeysKeyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsAppIdKeysKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAppsAppIdKeysKeyIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.KeyPatch;

  @Metadata()
  security: PatchAppsAppIdKeysKeyIdSecurity;
}


export class PatchAppsAppIdKeysKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  keyResponse?: shared.KeyResponse;
}
