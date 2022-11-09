import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAppsAppIdNamespacesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class PostAppsAppIdNamespacesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostAppsAppIdNamespacesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdNamespacesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NamespacePost;

  @Metadata()
  security: PostAppsAppIdNamespacesSecurity;
}


export class PostAppsAppIdNamespacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  namespaceResponse?: shared.NamespaceResponse;
}
