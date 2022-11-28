from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSubmissionsDeleteContentSubmissionAttributePathParams:
    content_submission_attribute_id: int = field(metadata={'path_param': { 'field_name': 'contentSubmissionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionAttributeRequest:
    path_params: ContentSubmissionsDeleteContentSubmissionAttributePathParams = field()
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
