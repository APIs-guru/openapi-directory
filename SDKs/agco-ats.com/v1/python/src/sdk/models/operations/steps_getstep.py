from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StepsGetStepPathParams:
    step_id: int = field(default=None, metadata={'path_param': { 'field_name': 'stepID', 'style': 'simple', 'explode': False }})
    

@dataclass
class StepsGetStepQueryParams:
    is_include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isIncludeDeleted', 'style': 'form', 'explode': True }})
    

@dataclass
class StepsGetStepRequest:
    path_params: StepsGetStepPathParams = field(default=None)
    query_params: StepsGetStepQueryParams = field(default=None)
    

@dataclass
class StepsGetStepResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    build_system_shared_dto_step: Optional[shared.BuildSystemSharedDtoStep] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
