from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LanguagesCreateLanguageRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_language: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_language1: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_language2: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class LanguagesCreateLanguageRequest:
    request: LanguagesCreateLanguageRequests = field(default=None)
    

@dataclass
class LanguagesCreateLanguageResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    languages_create_language_200_application_json_int32_integer: Optional[int] = field(default=None)
    languages_create_language_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
