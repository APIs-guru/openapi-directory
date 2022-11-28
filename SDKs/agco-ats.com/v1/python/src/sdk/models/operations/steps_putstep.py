from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StepsPutStepPathParams:
    step_id: int = field(metadata={'path_param': { 'field_name': 'stepID', 'style': 'simple', 'explode': False }})
    

@dataclass
class StepsPutStepRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_step: Optional[shared.BuildSystemSharedDtoStepInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_step1: Optional[shared.BuildSystemSharedDtoStepInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_step2: Optional[shared.BuildSystemSharedDtoStepInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class StepsPutStepRequest:
    path_params: StepsPutStepPathParams = field()
    request: StepsPutStepRequestsInput = field()
    

@dataclass
class StepsPutStepResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
