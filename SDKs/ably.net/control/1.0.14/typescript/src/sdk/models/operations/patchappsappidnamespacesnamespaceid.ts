import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAppsAppIdNamespacesNamespaceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace_id" })
  namespaceId: string;
}


export class PatchAppsAppIdNamespacesNamespaceIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsAppIdNamespacesNamespaceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAppsAppIdNamespacesNamespaceIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NamespacePatch;

  @Metadata()
  security: PatchAppsAppIdNamespacesNamespaceIdSecurity;
}


export class PatchAppsAppIdNamespacesNamespaceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  namespaceResponse?: shared.NamespaceResponse;
}
