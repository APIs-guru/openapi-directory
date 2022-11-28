from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivitiesPutActivityPathParams:
    activity_id: int = field(metadata={'path_param': { 'field_name': 'activityID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivitiesPutActivityRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_activity: Optional[shared.BuildSystemSharedDtoActivityInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_activity1: Optional[shared.BuildSystemSharedDtoActivityInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_activity2: Optional[shared.BuildSystemSharedDtoActivityInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ActivitiesPutActivityRequest:
    path_params: ActivitiesPutActivityPathParams = field()
    request: ActivitiesPutActivityRequestsInput = field()
    

@dataclass
class ActivitiesPutActivityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
