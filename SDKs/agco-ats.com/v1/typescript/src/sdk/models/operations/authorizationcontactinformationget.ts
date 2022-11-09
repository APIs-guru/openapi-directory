import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizationContactInformationGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=afterDate" })
  afterDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=authorizationCode" })
  authorizationCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=beforeDate" })
  beforeDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealerCode" })
  dealerCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AuthorizationContactInformationGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AuthorizationContactInformationGetQueryParams;
}


export class AuthorizationContactInformationGetResponse extends SpeakeasyBase {
  @Metadata()
  apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation?: shared.ApiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
