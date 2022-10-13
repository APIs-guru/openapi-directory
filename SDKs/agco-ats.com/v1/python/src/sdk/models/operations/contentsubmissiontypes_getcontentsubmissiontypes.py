from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ContentSubmissionTypesGetContentSubmissionTypesQueryParams:
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentSubmissionTypesGetContentSubmissionTypesRequest:
    query_params: ContentSubmissionTypesGetContentSubmissionTypesQueryParams = field(default=None)
    

@dataclass
class ContentSubmissionTypesGetContentSubmissionTypesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_content_submission_types: Optional[List[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
