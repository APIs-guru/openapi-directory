import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserPermissionsGetRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserPermissionsGetRolesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UserPermissionsGetRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserPermissionsGetRolesPathParams;

  @Metadata()
  queryParams: UserPermissionsGetRolesQueryParams;
}


export class UserPermissionsGetRolesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
