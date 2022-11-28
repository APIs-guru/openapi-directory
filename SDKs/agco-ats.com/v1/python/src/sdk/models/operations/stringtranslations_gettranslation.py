from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StringTranslationsGetTranslationPathParams:
    language_id: int = field(metadata={'path_param': { 'field_name': 'languageId', 'style': 'simple', 'explode': False }})
    string_id: str = field(metadata={'path_param': { 'field_name': 'stringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StringTranslationsGetTranslationRequest:
    path_params: StringTranslationsGetTranslationPathParams = field()
    

@dataclass
class StringTranslationsGetTranslationResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_string_translation: Optional[shared.GlobalResourcesSharedModelsStringTranslation] = field(default=None)
    
