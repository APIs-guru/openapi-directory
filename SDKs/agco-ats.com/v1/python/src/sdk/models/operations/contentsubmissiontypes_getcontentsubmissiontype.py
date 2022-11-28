from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContentSubmissionTypesGetContentSubmissionTypePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionTypesGetContentSubmissionTypeRequest:
    path_params: ContentSubmissionTypesGetContentSubmissionTypePathParams = field()
    

@dataclass
class ContentSubmissionTypesGetContentSubmissionTypeResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    content_submission_shared_business_entities_content_submission_type: Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType] = field(default=None)
    
