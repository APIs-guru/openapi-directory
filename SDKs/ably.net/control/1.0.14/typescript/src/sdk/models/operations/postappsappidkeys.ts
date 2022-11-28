import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAppsAppIdKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class PostAppsAppIdKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdKeysPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.KeyPost;

  @SpeakeasyMetadata()
  security: PostAppsAppIdKeysSecurity;
}


export class PostAppsAppIdKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  keyResponse?: shared.KeyResponse;
}
