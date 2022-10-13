from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionsGetContentSubmissionPathParams:
    content_submission_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentSubmissionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSubmissionsGetContentSubmissionRequest:
    path_params: ContentSubmissionsGetContentSubmissionPathParams = field(default=None)
    query_params: ContentSubmissionsGetContentSubmissionQueryParams = field(default=None)
    

@dataclass
class ContentSubmissionsGetContentSubmissionResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_content_submission: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmission] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
