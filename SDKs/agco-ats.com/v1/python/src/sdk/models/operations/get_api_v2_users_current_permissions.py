from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2UsersCurrentPermissionsQueryParams:
    permission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Permission', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV2UsersCurrentPermissionsRequest:
    query_params: GetAPIV2UsersCurrentPermissionsQueryParams = field()
    

@dataclass
class GetAPIV2UsersCurrentPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_api_models_user_effective_permission_: Optional[shared.APIPagedResponseAPIModelsUserEffectivePermission] = field(default=None)
    
