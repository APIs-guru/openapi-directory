import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAppsAppIdNamespacesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class PostAppsAppIdNamespacesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdNamespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdNamespacesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NamespacePost;

  @SpeakeasyMetadata()
  security: PostAppsAppIdNamespacesSecurity;
}


export class PostAppsAppIdNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  namespaceResponse?: shared.NamespaceResponse;
}
