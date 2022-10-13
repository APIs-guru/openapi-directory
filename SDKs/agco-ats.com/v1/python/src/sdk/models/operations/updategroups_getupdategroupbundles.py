from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupsGetUpdateGroupBundlesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsGetUpdateGroupBundlesQueryParams:
    include_inactive: bool = field(default=None, metadata={'query_param': { 'field_name': 'IncludeInactive', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateGroupsGetUpdateGroupBundlesRequest:
    path_params: UpdateGroupsGetUpdateGroupBundlesPathParams = field(default=None)
    query_params: UpdateGroupsGetUpdateGroupBundlesQueryParams = field(default=None)
    

@dataclass
class UpdateGroupsGetUpdateGroupBundlesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_bundle_: Optional[shared.APIPagedResponseUpdateSystemModelsBundle] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
