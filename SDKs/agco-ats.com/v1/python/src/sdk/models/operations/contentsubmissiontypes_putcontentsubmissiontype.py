from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionTypesPutContentSubmissionTypePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionTypesPutContentSubmissionTypeRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    content_submission_shared_business_entities_content_submission_type: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_submission_type1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_submission_type2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ContentSubmissionTypesPutContentSubmissionTypeRequest:
    path_params: ContentSubmissionTypesPutContentSubmissionTypePathParams = field()
    request: ContentSubmissionTypesPutContentSubmissionTypeRequests = field()
    

@dataclass
class ContentSubmissionTypesPutContentSubmissionTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
