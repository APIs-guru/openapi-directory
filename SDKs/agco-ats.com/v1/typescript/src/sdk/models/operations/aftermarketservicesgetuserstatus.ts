import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AftermarketServicesGetUserStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dealerCode" })
  dealerCode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherCode" })
  voucherCode: string;
}


export class AftermarketServicesGetUserStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AftermarketServicesGetUserStatusQueryParams;
}


export class AftermarketServicesGetUserStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agcoPowerServicesModelsUserStatus?: shared.AgcoPowerServicesModelsUserStatus;

  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
