from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsPostContentDefinitionAttributePathParams:
    content_definition_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsPostContentDefinitionAttributeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_definition_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_definition_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_definition_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentDefinitionsPostContentDefinitionAttributeRequest:
    path_params: ContentDefinitionsPostContentDefinitionAttributePathParams = field(default=None)
    request: ContentDefinitionsPostContentDefinitionAttributeRequests = field(default=None)
    

@dataclass
class ContentDefinitionsPostContentDefinitionAttributeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_definitions_post_content_definition_attribute_200_application_json_int32_integer: Optional[int] = field(default=None)
    content_definitions_post_content_definition_attribute_200_text_json_int32_integer: Optional[int] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
