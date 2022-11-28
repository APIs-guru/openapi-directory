import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizationContactInformationGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorizationCode" })
  authorizationCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beforeDate" })
  beforeDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealerCode" })
  dealerCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AuthorizationContactInformationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AuthorizationContactInformationGetQueryParams;
}


export class AuthorizationContactInformationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
