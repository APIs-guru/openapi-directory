from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityRunsGetActivityRunStatusPathParams:
    activity_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'activityRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityRunsGetActivityRunStatusRequest:
    path_params: ActivityRunsGetActivityRunStatusPathParams = field(default=None)
    

@dataclass
class ActivityRunsGetActivityRunStatusResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    build_system_shared_dto_activity_run_status: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
