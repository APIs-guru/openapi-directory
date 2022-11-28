import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationCodesGetAuthorizationCodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdByUserID" })
  createdByUserId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=definitionID" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deletedByUserID" })
  deletedByUserId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" })
  includeDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AuthorizationCodesGetAuthorizationCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizationCodesGetAuthorizationCodesQueryParams;
}


export class AuthorizationCodesGetAuthorizationCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
