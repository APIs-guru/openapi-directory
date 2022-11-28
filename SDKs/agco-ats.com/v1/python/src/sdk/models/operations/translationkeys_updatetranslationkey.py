from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationKeysUpdateTranslationKeyPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationKeysUpdateTranslationKeyRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    oas_support_shared_models_translation_key: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    oas_support_shared_models_translation_key1: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    oas_support_shared_models_translation_key2: Optional[shared.OasSupportSharedModelsTranslationKey] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TranslationKeysUpdateTranslationKeyRequest:
    path_params: TranslationKeysUpdateTranslationKeyPathParams = field()
    request: TranslationKeysUpdateTranslationKeyRequests = field()
    

@dataclass
class TranslationKeysUpdateTranslationKeyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
