import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAppsAppIdKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class PostAppsAppIdKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdKeysPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.KeyPost;

  @Metadata()
  security: PostAppsAppIdKeysSecurity;
}


export class PostAppsAppIdKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  keyResponse?: shared.KeyResponse;
}
