from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StringTranslationsUpdateTranslationPathParams:
    language_id: int = field(default=None, metadata={'path_param': { 'field_name': 'languageId', 'style': 'simple', 'explode': False }})
    string_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StringTranslationsUpdateTranslationRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_string_translation: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_string_translation1: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_string_translation2: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class StringTranslationsUpdateTranslationRequest:
    path_params: StringTranslationsUpdateTranslationPathParams = field(default=None)
    request: StringTranslationsUpdateTranslationRequests = field(default=None)
    

@dataclass
class StringTranslationsUpdateTranslationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
