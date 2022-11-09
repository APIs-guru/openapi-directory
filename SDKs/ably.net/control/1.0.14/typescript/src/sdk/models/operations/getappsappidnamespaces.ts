import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAppsAppIdNamespacesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class GetAppsAppIdNamespacesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdNamespacesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAppIdNamespacesPathParams;

  @Metadata()
  security: GetAppsAppIdNamespacesSecurity;
}


export class GetAppsAppIdNamespacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.NamespaceResponse })
  namespaceResponses?: shared.NamespaceResponse[];
}
