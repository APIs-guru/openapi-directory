from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LanguagesGetLanguagePathParams:
    locale_id: int = field(metadata={'path_param': { 'field_name': 'LocaleID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LanguagesGetLanguageRequest:
    path_params: LanguagesGetLanguagePathParams = field()
    

@dataclass
class LanguagesGetLanguageResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_language: Optional[shared.GlobalResourcesSharedModelsLanguage] = field(default=None)
    
