from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCategoriesPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCategoriesPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    authorization_codes_shared_models_category: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authorization_codes_shared_models_category1: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    authorization_codes_shared_models_category2: Optional[shared.AuthorizationCodesSharedModelsCategory] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthorizationCategoriesPutRequest:
    path_params: AuthorizationCategoriesPutPathParams = field()
    request: AuthorizationCategoriesPutRequests = field()
    

@dataclass
class AuthorizationCategoriesPutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
