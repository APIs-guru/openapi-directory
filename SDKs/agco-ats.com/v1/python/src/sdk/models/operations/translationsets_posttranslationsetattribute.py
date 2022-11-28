from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsPostTranslationSetAttributePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsPostTranslationSetAttributeRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_translation_set_attribute: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_set_attribute1: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_set_attribute2: Optional[shared.GlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TranslationSetsPostTranslationSetAttributeRequest:
    path_params: TranslationSetsPostTranslationSetAttributePathParams = field()
    request: TranslationSetsPostTranslationSetAttributeRequests = field()
    

@dataclass
class TranslationSetsPostTranslationSetAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    translation_sets_post_translation_set_attribute_200_application_json_int32_integer: Optional[int] = field(default=None)
    translation_sets_post_translation_set_attribute_200_text_json_int32_integer: Optional[int] = field(default=None)
    
