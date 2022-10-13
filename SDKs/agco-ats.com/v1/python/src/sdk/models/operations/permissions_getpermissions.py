from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PermissionsGetPermissionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class PermissionsGetPermissionsRequest:
    query_params: PermissionsGetPermissionsQueryParams = field(default=None)
    

@dataclass
class PermissionsGetPermissionsResponse:
    api_paged_response_api_models_permission_: Optional[shared.APIPagedResponseAPIModelsPermission] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
