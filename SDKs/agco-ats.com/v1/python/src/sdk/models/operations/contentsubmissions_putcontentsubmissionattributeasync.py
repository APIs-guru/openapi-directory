from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams:
    content_submission_attribute_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentSubmissionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_submission_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_submission_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_submission_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncRequest:
    path_params: ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams = field(default=None)
    request: ContentSubmissionsPutContentSubmissionAttributeAsyncRequests = field(default=None)
    

@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
