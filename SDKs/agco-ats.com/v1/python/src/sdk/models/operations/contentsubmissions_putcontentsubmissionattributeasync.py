from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams:
    content_submission_attribute_id: int = field(metadata={'path_param': { 'field_name': 'contentSubmissionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    content_submission_shared_business_entities_content_submission_attribute: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_submission_attribute1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_submission_attribute2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncRequest:
    path_params: ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams = field()
    request: ContentSubmissionsPutContentSubmissionAttributeAsyncRequests = field()
    

@dataclass
class ContentSubmissionsPutContentSubmissionAttributeAsyncResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
