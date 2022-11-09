import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DealersGetDealersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Brand" })
  brand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DealerName" })
  dealerName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ShippingCountry" })
  shippingCountry?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DealersGetDealersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DealersGetDealersQueryParams;
}


export class DealersGetDealersResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseDealerDbModelsDealer?: shared.ApiPagedResponseDealerDbModelsDealer;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
