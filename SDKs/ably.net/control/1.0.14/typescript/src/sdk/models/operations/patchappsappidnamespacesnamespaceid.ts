import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAppsAppIdNamespacesNamespaceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace_id" })
  namespaceId: string;
}


export class PatchAppsAppIdNamespacesNamespaceIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchAppsAppIdNamespacesNamespaceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAppsAppIdNamespacesNamespaceIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NamespacePatch;

  @SpeakeasyMetadata()
  security: PatchAppsAppIdNamespacesNamespaceIdSecurity;
}


export class PatchAppsAppIdNamespacesNamespaceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  namespaceResponse?: shared.NamespaceResponse;
}
