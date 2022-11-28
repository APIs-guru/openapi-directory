from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SearchFlightOffersHeaders:
    x_http_method_override: str = field(metadata={'header': { 'field_name': 'X-HTTP-Method-Override', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchFlightOffersRequest:
    headers: SearchFlightOffersHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/vnd.amadeus+json' }})
    

@dataclass
class SearchFlightOffersResponse:
    content_type: str = field()
    status_code: int = field()
    error_400: Optional[Any] = field(default=None)
    error_500: Optional[Any] = field(default=None)
    success: Optional[Any] = field(default=None)
    
