from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityRunsPutActivityRunPathParams:
    activity_run_id: int = field(metadata={'path_param': { 'field_name': 'activityRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityRunsPutActivityRunRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_activity_run: Optional[shared.BuildSystemSharedDtoActivityRunInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_activity_run1: Optional[shared.BuildSystemSharedDtoActivityRunInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_activity_run2: Optional[shared.BuildSystemSharedDtoActivityRunInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ActivityRunsPutActivityRunRequest:
    path_params: ActivityRunsPutActivityRunPathParams = field()
    request: ActivityRunsPutActivityRunRequestsInput = field()
    

@dataclass
class ActivityRunsPutActivityRunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
