from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityRunsPutActivityRunStatusPathParams:
    activity_run_id: int = field(metadata={'path_param': { 'field_name': 'activityRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityRunsPutActivityRunStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_activity_run_status: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_activity_run_status1: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_activity_run_status2: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ActivityRunsPutActivityRunStatusRequest:
    path_params: ActivityRunsPutActivityRunStatusPathParams = field()
    request: ActivityRunsPutActivityRunStatusRequests = field()
    

@dataclass
class ActivityRunsPutActivityRunStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
