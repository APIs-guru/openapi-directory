from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class ActivityRunsGetActivityRunsStatusEnum(str, Enum):
    READY = "Ready"
    IN_PROGRESS = "InProgress"
    SUCCEEDED = "Succeeded"
    CANCELLED = "Cancelled"
    FAILED = "Failed"


@dataclass
class ActivityRunsGetActivityRunsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    status: Optional[ActivityRunsGetActivityRunsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityRunsGetActivityRunsRequest:
    query_params: ActivityRunsGetActivityRunsQueryParams = field()
    

@dataclass
class ActivityRunsGetActivityRunsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_build_system_shared_dto_activity_run_: Optional[shared.APIPagedResponseBuildSystemSharedDtoActivityRun] = field(default=None)
    
