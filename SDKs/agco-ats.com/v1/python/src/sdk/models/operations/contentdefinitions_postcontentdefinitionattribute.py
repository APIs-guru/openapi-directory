from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsPostContentDefinitionAttributePathParams:
    content_definition_id: int = field(metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsPostContentDefinitionAttributeRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    content_submission_shared_business_entities_content_definition_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_definition_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_definition_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ContentDefinitionsPostContentDefinitionAttributeRequest:
    path_params: ContentDefinitionsPostContentDefinitionAttributePathParams = field()
    request: ContentDefinitionsPostContentDefinitionAttributeRequests = field()
    

@dataclass
class ContentDefinitionsPostContentDefinitionAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    content_definitions_post_content_definition_attribute_200_application_json_int32_integer: Optional[int] = field(default=None)
    content_definitions_post_content_definition_attribute_200_text_json_int32_integer: Optional[int] = field(default=None)
    
