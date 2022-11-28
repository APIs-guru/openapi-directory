from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2ContentReleasesContentReleaseIDPathParams:
    content_release_id: int = field(metadata={'path_param': { 'field_name': 'ContentReleaseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2ContentReleasesContentReleaseIDRequest:
    path_params: GetAPIV2ContentReleasesContentReleaseIDPathParams = field()
    

@dataclass
class GetAPIV2ContentReleasesContentReleaseIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    content_submission_shared_business_entities_content_release_version: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None)
    
