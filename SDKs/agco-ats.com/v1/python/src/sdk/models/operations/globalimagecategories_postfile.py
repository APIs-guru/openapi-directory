from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GlobalImageCategoriesPostFileRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_global_image_category: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_global_image_category1: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_global_image_category2: Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class GlobalImageCategoriesPostFileRequest:
    request: GlobalImageCategoriesPostFileRequests = field()
    

@dataclass
class GlobalImageCategoriesPostFileResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_image_categories_post_file_200_application_json_string: Optional[str] = field(default=None)
    global_image_categories_post_file_200_application_xml_string: Optional[str] = field(default=None)
    global_image_categories_post_file_200_text_json_string: Optional[str] = field(default=None)
    global_image_categories_post_file_200_text_xml_string: Optional[str] = field(default=None)
    
