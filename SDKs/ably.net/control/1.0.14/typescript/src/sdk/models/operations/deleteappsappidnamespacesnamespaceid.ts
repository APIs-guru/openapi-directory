import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAppsAppIdNamespacesNamespaceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace_id" })
  namespaceId: string;
}


export class DeleteAppsAppIdNamespacesNamespaceIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAppsAppIdNamespacesNamespaceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAppsAppIdNamespacesNamespaceIdPathParams;

  @Metadata()
  security: DeleteAppsAppIdNamespacesNamespaceIdSecurity;
}


export class DeleteAppsAppIdNamespacesNamespaceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
