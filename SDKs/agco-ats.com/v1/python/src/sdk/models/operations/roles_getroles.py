from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesGetRolesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class RolesGetRolesRequest:
    query_params: RolesGetRolesQueryParams = field(default=None)
    

@dataclass
class RolesGetRolesResponse:
    api_paged_response_api_models_role_: Optional[shared.APIPagedResponseAPIModelsRole] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
