from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


GET_V1__SERVERS = [
	"https://ipgeolocation.abstractapi.com",
]


@dataclass
class GetV1QueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ip_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip_address', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1Request:
    query_params: GetV1QueryParams = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetV1Response:
    content_type: str = field()
    status_code: int = field()
    inline_response_200: Optional[shared.InlineResponse200] = field(default=None)
    
