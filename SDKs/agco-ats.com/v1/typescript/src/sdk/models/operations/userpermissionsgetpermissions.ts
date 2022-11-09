import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserPermissionsGetPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserPermissionsGetPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Permission" })
  permission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UserPermissionsGetPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserPermissionsGetPermissionsPathParams;

  @Metadata()
  queryParams: UserPermissionsGetPermissionsQueryParams;
}


export class UserPermissionsGetPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseApiModelsUserEffectivePermission?: shared.ApiPagedResponseApiModelsUserEffectivePermission;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
