import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAppsAppIdNamespacesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class GetAppsAppIdNamespacesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAppsAppIdNamespacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAppIdNamespacesPathParams;

  @SpeakeasyMetadata()
  security: GetAppsAppIdNamespacesSecurity;
}


export class GetAppsAppIdNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.NamespaceResponse })
  namespaceResponses?: shared.NamespaceResponse[];
}
