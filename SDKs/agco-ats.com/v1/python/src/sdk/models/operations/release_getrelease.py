from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReleaseGetReleasePathParams:
    release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReleaseGetReleaseRequest:
    path_params: ReleaseGetReleasePathParams = field(default=None)
    

@dataclass
class ReleaseGetReleaseResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_release: Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
