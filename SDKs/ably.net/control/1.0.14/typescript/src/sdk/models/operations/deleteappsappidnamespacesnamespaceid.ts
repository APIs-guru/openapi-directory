import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAppsAppIdNamespacesNamespaceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace_id" })
  namespaceId: string;
}


export class DeleteAppsAppIdNamespacesNamespaceIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteAppsAppIdNamespacesNamespaceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAppsAppIdNamespacesNamespaceIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteAppsAppIdNamespacesNamespaceIdSecurity;
}


export class DeleteAppsAppIdNamespacesNamespaceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
