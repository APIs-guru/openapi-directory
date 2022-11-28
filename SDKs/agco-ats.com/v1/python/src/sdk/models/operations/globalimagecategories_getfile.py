from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImageCategoriesGetFilePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImageCategoriesGetFileRequest:
    path_params: GlobalImageCategoriesGetFilePathParams = field()
    

@dataclass
class GlobalImageCategoriesGetFileResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_global_image_category: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None)
    
