from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentReleasePutContentDefinitionPathParams:
    content_release_id: int = field(metadata={'path_param': { 'field_name': 'ContentReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentReleasePutContentDefinitionRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    content_submission_shared_business_entities_content_release_version: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_release_version1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_release_version2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ContentReleasePutContentDefinitionRequest:
    path_params: ContentReleasePutContentDefinitionPathParams = field()
    request: ContentReleasePutContentDefinitionRequests = field()
    

@dataclass
class ContentReleasePutContentDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
