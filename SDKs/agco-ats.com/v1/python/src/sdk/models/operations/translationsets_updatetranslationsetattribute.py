from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsUpdateTranslationSetAttributePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsUpdateTranslationSetAttributeRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_translation_set_attribute: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_set_attribute1: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_set_attribute2: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TranslationSetsUpdateTranslationSetAttributeRequest:
    path_params: TranslationSetsUpdateTranslationSetAttributePathParams = field()
    request: TranslationSetsUpdateTranslationSetAttributeRequests = field()
    

@dataclass
class TranslationSetsUpdateTranslationSetAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
