from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ActivitiesDeleteActivityPathParams:
    activity_id: int = field(metadata={'path_param': { 'field_name': 'activityID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivitiesDeleteActivityRequest:
    path_params: ActivitiesDeleteActivityPathParams = field()
    

@dataclass
class ActivitiesDeleteActivityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
