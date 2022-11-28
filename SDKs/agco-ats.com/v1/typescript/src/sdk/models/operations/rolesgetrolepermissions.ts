import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RolesGetRolePermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RolesGetRolePermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RolesGetRolePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesGetRolePermissionsPathParams;

  @SpeakeasyMetadata()
  queryParams: RolesGetRolePermissionsQueryParams;
}


export class RolesGetRolePermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPagedResponseApiModelsPermission?: shared.ApiPagedResponseApiModelsPermission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
