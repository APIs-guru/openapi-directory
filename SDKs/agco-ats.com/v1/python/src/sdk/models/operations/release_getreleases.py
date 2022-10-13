from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReleaseGetReleasesQueryParams:
    bundle_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundleID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    visible: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'visible', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseGetReleasesRequest:
    query_params: ReleaseGetReleasesQueryParams = field(default=None)
    

@dataclass
class ReleaseGetReleasesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_content_submission_shared_business_entities_release_: Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
