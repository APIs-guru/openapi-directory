from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StepsGetStepsQueryParams:
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class StepsGetStepsRequest:
    query_params: StepsGetStepsQueryParams = field()
    

@dataclass
class StepsGetStepsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_build_system_shared_dto_step_: Optional[shared.APIPagedResponseBuildSystemSharedDtoStep] = field(default=None)
    
