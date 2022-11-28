from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationKeysGetTranslationKeyPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationKeysGetTranslationKeyRequest:
    path_params: TranslationKeysGetTranslationKeyPathParams = field()
    

@dataclass
class TranslationKeysGetTranslationKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    oas_support_shared_models_translation_key: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None)
    
