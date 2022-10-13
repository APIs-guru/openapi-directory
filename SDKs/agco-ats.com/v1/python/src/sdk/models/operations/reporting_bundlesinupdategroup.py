from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingBundlesInUpdateGroupQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    include_inactive: bool = field(default=None, metadata={'query_param': { 'field_name': 'IncludeInactive', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingBundlesInUpdateGroupRequest:
    query_params: ReportingBundlesInUpdateGroupQueryParams = field(default=None)
    

@dataclass
class ReportingBundlesInUpdateGroupResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_bundle_: Optional[shared.APIPagedResponseUpdateSystemModelsBundle] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
