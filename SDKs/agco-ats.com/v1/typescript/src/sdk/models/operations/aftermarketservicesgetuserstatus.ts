import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AftermarketServicesGetUserStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dealerCode" })
  dealerCode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voucherCode" })
  voucherCode: string;
}


export class AftermarketServicesGetUserStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AftermarketServicesGetUserStatusQueryParams;
}


export class AftermarketServicesGetUserStatusResponse extends SpeakeasyBase {
  @Metadata()
  agcoPowerServicesModelsUserStatus?: shared.AgcoPowerServicesModelsUserStatus;

  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
