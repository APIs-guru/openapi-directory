import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RolesPutRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesPutRoleRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiModelsRole?: shared.ApiModelsRole;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiModelsRole1?: shared.ApiModelsRole;

  @Metadata({ data: "request, media_type=text/json" })
  apiModelsRole2?: shared.ApiModelsRole;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RolesPutRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RolesPutRolePathParams;

  @Metadata()
  request: RolesPutRoleRequests;
}


export class RolesPutRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
