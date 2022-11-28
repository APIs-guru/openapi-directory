import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCategoriesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=definitionID" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class AuthorizationCategoriesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizationCategoriesGetQueryParams;
}


export class AuthorizationCategoriesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseAuthorizationCodesSharedModelsCategory?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsCategory;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
