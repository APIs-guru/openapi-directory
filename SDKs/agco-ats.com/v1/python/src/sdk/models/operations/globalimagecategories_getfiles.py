from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImageCategoriesGetFilesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GlobalImageCategoriesGetFilesRequest:
    query_params: GlobalImageCategoriesGetFilesQueryParams = field(default=None)
    

@dataclass
class GlobalImageCategoriesGetFilesResponse:
    api_i_paged_response_global_resources_shared_models_global_image_category_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
