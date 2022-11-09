import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DealerByCountryGetCountriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class DealerByCountryGetCountriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DealerByCountryGetCountriesQueryParams;
}


export class DealerByCountryGetCountriesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseDealerDbModelsDealersPerCountry?: shared.ApiPagedResponseDealerDbModelsDealersPerCountry;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
