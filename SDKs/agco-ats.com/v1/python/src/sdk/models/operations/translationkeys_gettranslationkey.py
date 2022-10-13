from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationKeysGetTranslationKeyPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationKeysGetTranslationKeyRequest:
    path_params: TranslationKeysGetTranslationKeyPathParams = field(default=None)
    

@dataclass
class TranslationKeysGetTranslationKeyResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    oas_support_shared_models_translation_key: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None)
    status_code: int = field(default=None)
    
