from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionTypesGetContentSubmissionTypePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionTypesGetContentSubmissionTypeRequest:
    path_params: ContentSubmissionTypesGetContentSubmissionTypePathParams = field(default=None)
    

@dataclass
class ContentSubmissionTypesGetContentSubmissionTypeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_submission_shared_business_entities_content_submission_type: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
