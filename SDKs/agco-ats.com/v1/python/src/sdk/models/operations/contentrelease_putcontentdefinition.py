from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentReleasePutContentDefinitionPathParams:
    content_release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ContentReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentReleasePutContentDefinitionRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_release_version: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_release_version1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_release_version2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentReleasePutContentDefinitionRequest:
    path_params: ContentReleasePutContentDefinitionPathParams = field(default=None)
    request: ContentReleasePutContentDefinitionRequests = field(default=None)
    

@dataclass
class ContentReleasePutContentDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
