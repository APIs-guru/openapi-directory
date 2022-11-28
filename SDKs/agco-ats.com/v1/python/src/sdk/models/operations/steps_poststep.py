from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StepsPostStepRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_step: Optional[shared.BuildSystemSharedDtoStepInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_step1: Optional[shared.BuildSystemSharedDtoStepInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_step2: Optional[shared.BuildSystemSharedDtoStepInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class StepsPostStepRequest:
    request: StepsPostStepRequestsInput = field()
    

@dataclass
class StepsPostStepResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    steps_post_step_200_application_json_int32_integer: Optional[int] = field(default=None)
    steps_post_step_200_text_json_int32_integer: Optional[int] = field(default=None)
    
