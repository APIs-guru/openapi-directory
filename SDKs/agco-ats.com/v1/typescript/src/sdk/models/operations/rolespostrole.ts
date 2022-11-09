import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RolesPostRoleRequests extends SpeakeasyBase {
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


export class RolesPostRoleRequest extends SpeakeasyBase {
  @Metadata()
  request: RolesPostRoleRequests;
}


export class RolesPostRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  rolesPostRole200ApplicationJsonInt32Integer?: number;

  @Metadata()
  rolesPostRole200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
