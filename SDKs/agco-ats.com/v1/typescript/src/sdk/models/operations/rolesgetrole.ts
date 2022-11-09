import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RolesGetRolePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesGetRoleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RolesGetRolePathParams;
}


export class RolesGetRoleResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsRole?: shared.ApiModelsRole;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
