package operations

import (
	"openapi/pkg/models/shared"
)

type DealerByCountryGetCountriesQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type DealerByCountryGetCountriesRequest struct {
	QueryParams DealerByCountryGetCountriesQueryParams
}

type DealerByCountryGetCountriesResponse struct {
	APIModelsAPIError                               *shared.APIModelsAPIError
	APIPagedResponseDealerDbModelsDealersPerCountry *shared.APIPagedResponseDealerDbModelsDealersPerCountry
	ContentType                                     string
	StatusCode                                      int64
}
