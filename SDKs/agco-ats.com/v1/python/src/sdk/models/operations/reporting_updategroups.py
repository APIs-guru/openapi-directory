from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingUpdateGroupsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingUpdateGroupsRequest:
    query_params: ReportingUpdateGroupsQueryParams = field(default=None)
    

@dataclass
class ReportingUpdateGroupsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_update_group_: Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
