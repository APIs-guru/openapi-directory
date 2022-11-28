from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsGetContentSubmissionPathParams:
    content_submission_id: int = field(metadata={'path_param': { 'field_name': 'contentSubmissionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionRequest:
    path_params: ContentSubmissionsGetContentSubmissionPathParams = field()
    query_params: ContentSubmissionsGetContentSubmissionQueryParams = field()
    

@dataclass
class ContentSubmissionsGetContentSubmissionResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    content_submission_shared_business_entities_content_submission: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmission] = field(default=None)
    
