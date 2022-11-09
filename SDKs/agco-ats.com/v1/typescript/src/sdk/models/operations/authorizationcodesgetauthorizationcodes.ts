import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationCodesGetAuthorizationCodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdByUserID" })
  createdByUserId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=definitionID" })
  definitionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deletedByUserID" })
  deletedByUserId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AuthorizationCodesGetAuthorizationCodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizationCodesGetAuthorizationCodesQueryParams;
}


export class AuthorizationCodesGetAuthorizationCodesResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
