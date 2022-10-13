from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCategoriesPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCategoriesPutRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    authorization_codes_shared_models_category: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authorization_codes_shared_models_category1: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    authorization_codes_shared_models_category2: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthorizationCategoriesPutRequest:
    path_params: AuthorizationCategoriesPutPathParams = field(default=None)
    request: AuthorizationCategoriesPutRequests = field(default=None)
    

@dataclass
class AuthorizationCategoriesPutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
