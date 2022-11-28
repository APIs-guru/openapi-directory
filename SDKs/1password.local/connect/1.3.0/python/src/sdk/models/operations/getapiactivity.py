from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIActivityQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIActivitySecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAPIActivityRequest:
    query_params: GetAPIActivityQueryParams = field()
    security: GetAPIActivitySecurity = field()
    

@dataclass
class GetAPIActivityResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    api_requests: Optional[List[shared.APIRequest]] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
