from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImagesGetGlobalImagesQueryParams:
    category_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'categoryId', 'style': 'form', 'explode': True }})
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    publisher: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publisher', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GlobalImagesGetGlobalImagesRequest:
    query_params: GlobalImagesGetGlobalImagesQueryParams = field(default=None)
    

@dataclass
class GlobalImagesGetGlobalImagesResponse:
    api_i_paged_response_global_resources_shared_models_global_image_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImage] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
