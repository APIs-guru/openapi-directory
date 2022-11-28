from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsGetContentSubmissionAttributesPathParams:
    content_submission_id: int = field(metadata={'path_param': { 'field_name': 'contentSubmissionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionAttributesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionAttributesRequest:
    path_params: ContentSubmissionsGetContentSubmissionAttributesPathParams = field()
    query_params: ContentSubmissionsGetContentSubmissionAttributesQueryParams = field()
    

@dataclass
class ContentSubmissionsGetContentSubmissionAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_content_submission_shared_business_entities_content_submission_attribute_: Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute] = field(default=None)
    
