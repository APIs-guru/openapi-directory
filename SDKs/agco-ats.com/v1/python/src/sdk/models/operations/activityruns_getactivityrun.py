from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityRunsGetActivityRunPathParams:
    activity_run_id: int = field(metadata={'path_param': { 'field_name': 'activityRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityRunsGetActivityRunRequest:
    path_params: ActivityRunsGetActivityRunPathParams = field()
    

@dataclass
class ActivityRunsGetActivityRunResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    build_system_shared_dto_activity_run: Optional[shared.BuildSystemSharedDtoActivityRun] = field(default=None)
    
