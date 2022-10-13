from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentReleasePostContentReleaseRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_content_release_version: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_content_release_version1: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_content_release_version2: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ContentReleasePostContentReleaseRequest:
    request: ContentReleasePostContentReleaseRequests = field(default=None)
    

@dataclass
class ContentReleasePostContentReleaseResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_release_post_content_release_200_application_json_int32_integer: Optional[int] = field(default=None)
    content_release_post_content_release_200_text_json_int32_integer: Optional[int] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
