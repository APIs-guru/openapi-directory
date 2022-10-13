from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LanguagesUpdateLanguagePathParams:
    locale_id: int = field(default=None, metadata={'path_param': { 'field_name': 'LocaleID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LanguagesUpdateLanguageRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_language: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_language1: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_language2: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class LanguagesUpdateLanguageRequest:
    path_params: LanguagesUpdateLanguagePathParams = field(default=None)
    request: LanguagesUpdateLanguageRequests = field(default=None)
    

@dataclass
class LanguagesUpdateLanguageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
