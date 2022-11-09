import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCategoriesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=definitionID" })
  definitionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class AuthorizationCategoriesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizationCategoriesGetQueryParams;
}


export class AuthorizationCategoriesGetResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseAuthorizationCodesSharedModelsCategory?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategory;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
