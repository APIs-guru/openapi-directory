import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DealerByCountryGetCountriesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class DealerByCountryGetCountriesRequest extends SpeakeasyBase {
    queryParams: DealerByCountryGetCountriesQueryParams;
}
export declare class DealerByCountryGetCountriesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseDealerDbModelsDealersPerCountry?: shared.ApiPagedResponseDealerDbModelsDealersPerCountry;
    contentType: string;
    statusCode: number;
}
