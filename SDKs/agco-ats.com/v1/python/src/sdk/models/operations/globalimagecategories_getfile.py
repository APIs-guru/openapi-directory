from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImageCategoriesGetFilePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImageCategoriesGetFileRequest:
    path_params: GlobalImageCategoriesGetFilePathParams = field(default=None)
    

@dataclass
class GlobalImageCategoriesGetFileResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_resources_shared_models_global_image_category: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None)
    status_code: int = field(default=None)
    
