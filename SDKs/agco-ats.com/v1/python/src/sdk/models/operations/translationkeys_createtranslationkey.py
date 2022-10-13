from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationKeysCreateTranslationKeyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    oas_support_shared_models_translation_key: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    oas_support_shared_models_translation_key1: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    oas_support_shared_models_translation_key2: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TranslationKeysCreateTranslationKeyRequest:
    request: TranslationKeysCreateTranslationKeyRequests = field(default=None)
    

@dataclass
class TranslationKeysCreateTranslationKeyResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    translation_keys_create_translation_key_200_application_json_int32_integer: Optional[int] = field(default=None)
    translation_keys_create_translation_key_200_text_json_int32_integer: Optional[int] = field(default=None)
    
