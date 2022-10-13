from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityRunsPutActivityRunStatusPathParams:
    activity_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'activityRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityRunsPutActivityRunStatusRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    build_system_shared_dto_activity_run_status: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_activity_run_status1: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_activity_run_status2: Optional[shared.BuildSystemSharedDtoActivityRunStatus] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ActivityRunsPutActivityRunStatusRequest:
    path_params: ActivityRunsPutActivityRunStatusPathParams = field(default=None)
    request: ActivityRunsPutActivityRunStatusRequests = field(default=None)
    

@dataclass
class ActivityRunsPutActivityRunStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
