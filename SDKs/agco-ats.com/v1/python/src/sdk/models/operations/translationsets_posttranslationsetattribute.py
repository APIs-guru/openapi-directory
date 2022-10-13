from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsPostTranslationSetAttributePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsPostTranslationSetAttributeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_translation_set_attribute: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_set_attribute1: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_set_attribute2: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TranslationSetsPostTranslationSetAttributeRequest:
    path_params: TranslationSetsPostTranslationSetAttributePathParams = field(default=None)
    request: TranslationSetsPostTranslationSetAttributeRequests = field(default=None)
    

@dataclass
class TranslationSetsPostTranslationSetAttributeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    translation_sets_post_translation_set_attribute_200_application_json_int32_integer: Optional[int] = field(default=None)
    translation_sets_post_translation_set_attribute_200_text_json_int32_integer: Optional[int] = field(default=None)
    
