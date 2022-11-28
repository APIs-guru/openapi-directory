from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserPermissionsGetCurrentUserRolesQueryParams:
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Role', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UserPermissionsGetCurrentUserRolesRequest:
    query_params: UserPermissionsGetCurrentUserRolesQueryParams = field()
    

@dataclass
class UserPermissionsGetCurrentUserRolesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_api_models_role_: Optional[shared.APIPagedResponseAPIModelsRole] = field(default=None)
    
