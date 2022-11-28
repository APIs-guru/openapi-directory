import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RolesPutRolePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesPutRoleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiModelsRole?: shared.ApiModelsRole;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsRole1?: shared.ApiModelsRole;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiModelsRole2?: shared.ApiModelsRole;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RolesPutRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesPutRolePathParams;

  @SpeakeasyMetadata()
  request: RolesPutRoleRequests;
}


export class RolesPutRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
