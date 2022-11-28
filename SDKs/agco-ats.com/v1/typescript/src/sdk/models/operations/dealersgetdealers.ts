import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DealersGetDealersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DealerName" })
  dealerName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShippingCountry" })
  shippingCountry?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DealersGetDealersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DealersGetDealersQueryParams;
}


export class DealersGetDealersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseDealerDbModelsDealer?: shared.ApiPagedResponseDealerDbModelsDealer;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
