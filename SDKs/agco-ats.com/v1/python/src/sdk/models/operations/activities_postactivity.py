from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivitiesPostActivityRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_activity: Optional[shared.BuildSystemSharedDtoActivityInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_activity1: Optional[shared.BuildSystemSharedDtoActivityInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_activity2: Optional[shared.BuildSystemSharedDtoActivityInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ActivitiesPostActivityRequest:
    request: ActivitiesPostActivityRequestsInput = field()
    

@dataclass
class ActivitiesPostActivityResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    activities_post_activity_200_application_json_int32_integer: Optional[int] = field(default=None)
    activities_post_activity_200_text_json_int32_integer: Optional[int] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
