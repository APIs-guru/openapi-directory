from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StepsGetStepPathParams:
    step_id: int = field(metadata={'path_param': { 'field_name': 'stepID', 'style': 'simple', 'explode': False }})
    

@dataclass
class StepsGetStepQueryParams:
    is_include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isIncludeDeleted', 'style': 'form', 'explode': True }})
    

@dataclass
class StepsGetStepRequest:
    path_params: StepsGetStepPathParams = field()
    query_params: StepsGetStepQueryParams = field()
    

@dataclass
class StepsGetStepResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    build_system_shared_dto_step: Optional[shared.BuildSystemSharedDtoStep] = field(default=None)
    
