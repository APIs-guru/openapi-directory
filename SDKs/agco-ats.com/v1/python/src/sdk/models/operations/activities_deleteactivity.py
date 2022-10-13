from dataclasses import dataclass, field



@dataclass
class ActivitiesDeleteActivityPathParams:
    activity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'activityID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivitiesDeleteActivityRequest:
    path_params: ActivitiesDeleteActivityPathParams = field(default=None)
    

@dataclass
class ActivitiesDeleteActivityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
