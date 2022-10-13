from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReleasePostReleaseRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    content_submission_shared_business_entities_release: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    content_submission_shared_business_entities_release1: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    content_submission_shared_business_entities_release2: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ReleasePostReleaseRequest:
    request: ReleasePostReleaseRequests = field(default=None)
    

@dataclass
class ReleasePostReleaseResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    release_post_release_200_application_json_int32_integer: Optional[int] = field(default=None)
    release_post_release_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
