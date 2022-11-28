from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCategoriesPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    authorization_codes_shared_models_category: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authorization_codes_shared_models_category1: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    authorization_codes_shared_models_category2: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthorizationCategoriesPostRequest:
    request: AuthorizationCategoriesPostRequests = field()
    

@dataclass
class AuthorizationCategoriesPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_categories_post_200_application_json_string: Optional[str] = field(default=None)
    authorization_categories_post_200_application_xml_string: Optional[str] = field(default=None)
    authorization_categories_post_200_text_json_string: Optional[str] = field(default=None)
    authorization_categories_post_200_text_xml_string: Optional[str] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
