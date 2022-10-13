from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImagesGetGlobalImagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImagesGetGlobalImageRequest:
    path_params: GlobalImagesGetGlobalImagePathParams = field(default=None)
    

@dataclass
class GlobalImagesGetGlobalImageResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_resources_shared_models_global_image: Optional[shared.GlobalResourcesSharedModelsGlobalImage] = field(default=None)
    status_code: int = field(default=None)
    
