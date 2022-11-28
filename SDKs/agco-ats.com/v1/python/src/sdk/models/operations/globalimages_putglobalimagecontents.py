from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GlobalImagesPutGlobalImageContentsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImagesPutGlobalImageContentsQueryParams:
    is_full_image: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isFullImage', 'style': 'form', 'explode': True }})
    

@dataclass
class GlobalImagesPutGlobalImageContentsRequest:
    path_params: GlobalImagesPutGlobalImageContentsPathParams = field()
    query_params: GlobalImagesPutGlobalImageContentsQueryParams = field()
    

@dataclass
class GlobalImagesPutGlobalImageContentsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
