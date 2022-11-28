import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCategoriesGetUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryIDs" })
  categoryIDs?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeCategories" })
  includeCategories?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUsers" })
  includeUsers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIDs" })
  userIDs?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userSearch" })
  userSearch?: string;
}


export class AuthorizationCategoriesGetUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizationCategoriesGetUsersQueryParams;
}


export class AuthorizationCategoriesGetUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
