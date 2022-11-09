import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserPermissionsGetUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserPermissionsGetUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class UserPermissionsGetUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserPermissionsGetUsersPathParams;

  @Metadata()
  queryParams: UserPermissionsGetUsersQueryParams;
}


export class UserPermissionsGetUsersResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseApiModelsUser?: shared.ApiPagedResponseApiModelsUser;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
