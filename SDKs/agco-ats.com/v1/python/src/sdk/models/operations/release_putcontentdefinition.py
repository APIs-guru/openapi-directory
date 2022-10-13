from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReleasePutContentDefinitionPathParams:
    release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'releaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReleasePutContentDefinitionRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_release: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_release1: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_release2: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ReleasePutContentDefinitionRequest:
    path_params: ReleasePutContentDefinitionPathParams = field(default=None)
    request: ReleasePutContentDefinitionRequests = field(default=None)
    

@dataclass
class ReleasePutContentDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
