from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams:
    content_definition_attribute_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentDefinitionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_definition_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_definition_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_definition_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncRequest:
    path_params: ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams = field(default=None)
    request: ContentDefinitionsPutContentDefinitionAttributeAsyncRequests = field(default=None)
    

@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
