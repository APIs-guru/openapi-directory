from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsUpdateTranslationSetAttributePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsUpdateTranslationSetAttributeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_translation_set_attribute: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_set_attribute1: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_set_attribute2: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TranslationSetsUpdateTranslationSetAttributeRequest:
    path_params: TranslationSetsUpdateTranslationSetAttributePathParams = field(default=None)
    request: TranslationSetsUpdateTranslationSetAttributeRequests = field(default=None)
    

@dataclass
class TranslationSetsUpdateTranslationSetAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
