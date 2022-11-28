from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams:
    content_definition_attribute_id: int = field(metadata={'path_param': { 'field_name': 'contentDefinitionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    content_submission_shared_business_entities_content_definition_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_definition_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_definition_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncRequest:
    path_params: ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams = field()
    request: ContentDefinitionsPutContentDefinitionAttributeAsyncRequests = field()
    

@dataclass
class ContentDefinitionsPutContentDefinitionAttributeAsyncResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
