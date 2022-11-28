from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LanguagesCreateLanguageRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_language: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_language1: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_language2: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LanguagesCreateLanguageRequest:
    request: LanguagesCreateLanguageRequests = field()
    

@dataclass
class LanguagesCreateLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    languages_create_language_200_application_json_int32_integer: Optional[int] = field(default=None)
    languages_create_language_200_text_json_int32_integer: Optional[int] = field(default=None)
    
