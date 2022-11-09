import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RolesGetRolePermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesGetRolePermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RolesGetRolePermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RolesGetRolePermissionsPathParams;

  @Metadata()
  queryParams: RolesGetRolePermissionsQueryParams;
}


export class RolesGetRolePermissionsResponse extends SpeakeasyBase {
  @Metadata()
  apiPagedResponseApiModelsPermission?: shared.ApiPagedResponseApiModelsPermission;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
