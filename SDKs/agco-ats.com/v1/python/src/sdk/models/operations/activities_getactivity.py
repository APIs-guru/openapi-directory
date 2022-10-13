from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivitiesGetActivityPathParams:
    activity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'activityID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivitiesGetActivityQueryParams:
    is_include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isIncludeDeleted', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivitiesGetActivityRequest:
    path_params: ActivitiesGetActivityPathParams = field(default=None)
    query_params: ActivitiesGetActivityQueryParams = field(default=None)
    

@dataclass
class ActivitiesGetActivityResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    build_system_shared_dto_activity: Optional[shared.BuildSystemSharedDtoActivity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
