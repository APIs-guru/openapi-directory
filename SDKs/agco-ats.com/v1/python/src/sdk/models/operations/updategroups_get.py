from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupsGetQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateGroupsGetRequest:
    query_params: UpdateGroupsGetQueryParams = field(default=None)
    

@dataclass
class UpdateGroupsGetResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_update_group_: Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
