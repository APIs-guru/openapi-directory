from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class LanguagesUpdateLanguagePathParams:
    locale_id: int = field(metadata={'path_param': { 'field_name': 'LocaleID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LanguagesUpdateLanguageRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_language: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_language1: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_language2: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LanguagesUpdateLanguageRequest:
    path_params: LanguagesUpdateLanguagePathParams = field()
    request: LanguagesUpdateLanguageRequests = field()
    

@dataclass
class LanguagesUpdateLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
