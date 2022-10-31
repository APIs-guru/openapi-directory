package operations

import (
	"time"
)

type GetFlightOffersTravelClassEnum string

const (
	GetFlightOffersTravelClassEnumEconomy        GetFlightOffersTravelClassEnum = "ECONOMY"
	GetFlightOffersTravelClassEnumPremiumEconomy GetFlightOffersTravelClassEnum = "PREMIUM_ECONOMY"
	GetFlightOffersTravelClassEnumBusiness       GetFlightOffersTravelClassEnum = "BUSINESS"
	GetFlightOffersTravelClassEnumFirst          GetFlightOffersTravelClassEnum = "FIRST"
)

type GetFlightOffersQueryParams struct {
	Adults                  int64                           `queryParam:"style=form,explode=true,name=adults"`
	Children                *int64                          `queryParam:"style=form,explode=true,name=children"`
	CurrencyCode            *string                         `queryParam:"style=form,explode=true,name=currencyCode"`
	DepartureDate           time.Time                       `queryParam:"style=form,explode=true,name=departureDate"`
	DestinationLocationCode string                          `queryParam:"style=form,explode=true,name=destinationLocationCode"`
	ExcludedAirlineCodes    *string                         `queryParam:"style=form,explode=false,name=excludedAirlineCodes"`
	IncludedAirlineCodes    *string                         `queryParam:"style=form,explode=false,name=includedAirlineCodes"`
	Infants                 *int64                          `queryParam:"style=form,explode=true,name=infants"`
	Max                     *int64                          `queryParam:"style=form,explode=true,name=max"`
	MaxPrice                *int64                          `queryParam:"style=form,explode=true,name=maxPrice"`
	NonStop                 *bool                           `queryParam:"style=form,explode=true,name=nonStop"`
	OriginLocationCode      string                          `queryParam:"style=form,explode=true,name=originLocationCode"`
	ReturnDate              *time.Time                      `queryParam:"style=form,explode=true,name=returnDate"`
	TravelClass             *GetFlightOffersTravelClassEnum `queryParam:"style=form,explode=true,name=travelClass"`
}

type GetFlightOffersRequest struct {
	QueryParams GetFlightOffersQueryParams
}

type GetFlightOffersResponse struct {
	ContentType string
	Error400    *interface{}
	Error500    *interface{}
	StatusCode  int64
	Success     *interface{}
}
