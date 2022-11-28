from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsGetCurrentAgentActivityRunResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    build_system_shared_dto_activity_run: Optional[shared.BuildSystemSharedDtoActivityRun] = field(default=None)
    
