from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class StringTranslationsUpdateTranslationPathParams:
    language_id: int = field(metadata={'path_param': { 'field_name': 'languageId', 'style': 'simple', 'explode': False }})
    string_id: str = field(metadata={'path_param': { 'field_name': 'stringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StringTranslationsUpdateTranslationRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_string_translation: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_string_translation1: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_string_translation2: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class StringTranslationsUpdateTranslationRequest:
    path_params: StringTranslationsUpdateTranslationPathParams = field()
    request: StringTranslationsUpdateTranslationRequests = field()
    

@dataclass
class StringTranslationsUpdateTranslationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
