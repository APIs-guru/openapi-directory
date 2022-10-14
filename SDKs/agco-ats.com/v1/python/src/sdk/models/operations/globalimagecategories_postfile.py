from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImageCategoriesPostFileRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_global_image_category: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_global_image_category1: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_global_image_category2: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class GlobalImageCategoriesPostFileRequest:
    request: GlobalImageCategoriesPostFileRequests = field(default=None)
    

@dataclass
class GlobalImageCategoriesPostFileResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_image_categories_post_file_200_application_json_string: Optional[str] = field(default=None)
    global_image_categories_post_file_200_application_xml_string: Optional[str] = field(default=None)
    global_image_categories_post_file_200_text_json_string: Optional[str] = field(default=None)
    global_image_categories_post_file_200_text_xml_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
