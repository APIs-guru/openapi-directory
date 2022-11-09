import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categoryID" })
  categoryId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdByUserID" })
  createdByUserId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deletedByUserID" })
  deletedByUserId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionQueryParams;
}


export class AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
