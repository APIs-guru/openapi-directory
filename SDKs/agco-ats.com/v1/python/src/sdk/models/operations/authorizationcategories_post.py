from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCategoriesPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    authorization_codes_shared_models_category: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authorization_codes_shared_models_category1: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    authorization_codes_shared_models_category2: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthorizationCategoriesPostRequest:
    request: AuthorizationCategoriesPostRequests = field(default=None)
    

@dataclass
class AuthorizationCategoriesPostResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_categories_post_200_application_json_string: Optional[str] = field(default=None)
    authorization_categories_post_200_application_xml_string: Optional[str] = field(default=None)
    authorization_categories_post_200_text_json_string: Optional[str] = field(default=None)
    authorization_categories_post_200_text_xml_string: Optional[str] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
