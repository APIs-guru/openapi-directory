from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2ContentReleasesContentReleaseIDPathParams:
    content_release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'ContentReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2ContentReleasesContentReleaseIDRequest:
    path_params: GetAPIV2ContentReleasesContentReleaseIDPathParams = field(default=None)
    

@dataclass
class GetAPIV2ContentReleasesContentReleaseIDResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_content_release_version: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
