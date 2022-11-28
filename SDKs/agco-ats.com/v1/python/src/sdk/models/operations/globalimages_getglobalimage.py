from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImagesGetGlobalImagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImagesGetGlobalImageRequest:
    path_params: GlobalImagesGetGlobalImagePathParams = field()
    

@dataclass
class GlobalImagesGetGlobalImageResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_global_image: Optional[shared.GlobalResourcesSharedModelsGlobalImage] = field(default=None)
    
