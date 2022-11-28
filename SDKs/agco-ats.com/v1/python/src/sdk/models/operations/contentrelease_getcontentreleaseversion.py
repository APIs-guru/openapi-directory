from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentReleaseGetContentReleaseVersionQueryParams:
    content_definition_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'contentDefinitionID', 'style': 'form', 'explode': True }})
    deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    release_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'releaseID', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentReleaseGetContentReleaseVersionRequest:
    query_params: ContentReleaseGetContentReleaseVersionQueryParams = field()
    

@dataclass
class ContentReleaseGetContentReleaseVersionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_content_submission_shared_business_entities_content_release_version_: Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion] = field(default=None)
    
