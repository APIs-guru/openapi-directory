import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RolesPostRoleRequests extends SpeakeasyBase {
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


export class RolesPostRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: RolesPostRoleRequests;
}


export class RolesPostRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rolesPostRole200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  rolesPostRole200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
