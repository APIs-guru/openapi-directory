from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SearchFlightOffersHeaders:
    x_http_method_override: str = field(default=None, metadata={'header': { 'field_name': 'X-HTTP-Method-Override' }})
    

@dataclass
class SearchFlightOffersRequest:
    headers: SearchFlightOffersHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/vnd.amadeus+json' }})
    

@dataclass
class SearchFlightOffersResponse:
    content_type: str = field(default=None)
    error_400: Optional[Any] = field(default=None)
    error_500: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    success: Optional[Any] = field(default=None)
    
