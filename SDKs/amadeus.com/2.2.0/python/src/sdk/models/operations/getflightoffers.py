from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class GetFlightOffersTravelClassEnum(str, Enum):
    ECONOMY = "ECONOMY"
    PREMIUM_ECONOMY = "PREMIUM_ECONOMY"
    BUSINESS = "BUSINESS"
    FIRST = "FIRST"


@dataclass
class GetFlightOffersQueryParams:
    adults: int = field(metadata={'query_param': { 'field_name': 'adults', 'style': 'form', 'explode': True }})
    departure_date: date = field(metadata={'query_param': { 'field_name': 'departureDate', 'style': 'form', 'explode': True }})
    destination_location_code: str = field(metadata={'query_param': { 'field_name': 'destinationLocationCode', 'style': 'form', 'explode': True }})
    origin_location_code: str = field(metadata={'query_param': { 'field_name': 'originLocationCode', 'style': 'form', 'explode': True }})
    children: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'children', 'style': 'form', 'explode': True }})
    currency_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currencyCode', 'style': 'form', 'explode': True }})
    excluded_airline_codes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'excludedAirlineCodes', 'style': 'form', 'explode': False }})
    included_airline_codes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includedAirlineCodes', 'style': 'form', 'explode': False }})
    infants: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'infants', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    max_price: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxPrice', 'style': 'form', 'explode': True }})
    non_stop: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'nonStop', 'style': 'form', 'explode': True }})
    return_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'returnDate', 'style': 'form', 'explode': True }})
    travel_class: Optional[GetFlightOffersTravelClassEnum] = field(default=None, metadata={'query_param': { 'field_name': 'travelClass', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFlightOffersRequest:
    query_params: GetFlightOffersQueryParams = field()
    

@dataclass
class GetFlightOffersResponse:
    content_type: str = field()
    status_code: int = field()
    error_400: Optional[Any] = field(default=None)
    error_500: Optional[Any] = field(default=None)
    success: Optional[Any] = field(default=None)
    
