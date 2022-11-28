import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserPermissionsGetPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserPermissionsGetPermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Permission" })
  permission?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UserPermissionsGetPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserPermissionsGetPermissionsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserPermissionsGetPermissionsQueryParams;
}


export class UserPermissionsGetPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseApiModelsUserEffectivePermission?: shared.ApiPagedResponseApiModelsUserEffectivePermission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
