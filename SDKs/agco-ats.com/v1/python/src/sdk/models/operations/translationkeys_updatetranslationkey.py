from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationKeysUpdateTranslationKeyPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationKeysUpdateTranslationKeyRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    oas_support_shared_models_translation_key: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    oas_support_shared_models_translation_key1: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    oas_support_shared_models_translation_key2: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TranslationKeysUpdateTranslationKeyRequest:
    path_params: TranslationKeysUpdateTranslationKeyPathParams = field(default=None)
    request: TranslationKeysUpdateTranslationKeyRequests = field(default=None)
    

@dataclass
class TranslationKeysUpdateTranslationKeyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
