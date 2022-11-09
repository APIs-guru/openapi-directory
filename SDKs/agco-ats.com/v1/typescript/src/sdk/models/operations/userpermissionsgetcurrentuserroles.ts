import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserPermissionsGetCurrentUserRolesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UserPermissionsGetCurrentUserRolesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserPermissionsGetCurrentUserRolesQueryParams;
}


export class UserPermissionsGetCurrentUserRolesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseApiModelsRole?: shared.ApiPagedResponseApiModelsRole;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
