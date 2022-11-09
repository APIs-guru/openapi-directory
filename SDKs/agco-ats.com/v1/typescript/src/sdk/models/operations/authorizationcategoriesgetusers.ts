import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCategoriesGetUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categoryIDs" })
  categoryIDs?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeCategories" })
  includeCategories?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeUsers" })
  includeUsers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIDs" })
  userIDs?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userSearch" })
  userSearch?: string;
}


export class AuthorizationCategoriesGetUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizationCategoriesGetUsersQueryParams;
}


export class AuthorizationCategoriesGetUsersResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
