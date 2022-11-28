import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryID" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdByUserID" })
  createdByUserId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletedByUserID" })
  deletedByUserId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams;
}


export class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
