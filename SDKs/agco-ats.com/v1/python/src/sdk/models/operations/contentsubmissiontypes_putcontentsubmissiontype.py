from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionTypesPutContentSubmissionTypePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionTypesPutContentSubmissionTypeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_submission_type: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_submission_type1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_submission_type2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentSubmissionTypesPutContentSubmissionTypeRequest:
    path_params: ContentSubmissionTypesPutContentSubmissionTypePathParams = field(default=None)
    request: ContentSubmissionTypesPutContentSubmissionTypeRequests = field(default=None)
    

@dataclass
class ContentSubmissionTypesPutContentSubmissionTypeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
