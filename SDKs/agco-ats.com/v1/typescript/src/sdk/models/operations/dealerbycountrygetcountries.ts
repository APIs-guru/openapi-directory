import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DealerByCountryGetCountriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DealerByCountryGetCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DealerByCountryGetCountriesQueryParams;
}


export class DealerByCountryGetCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseDealerDbModelsDealersPerCountry?: shared.ApiPagedResponseDealerDbModelsDealersPerCountry;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
