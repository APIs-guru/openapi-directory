from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSubmissionsDeleteContentSubmissionPathParams:
    content_submission_id: int = field(metadata={'path_param': { 'field_name': 'contentSubmissionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionRequest:
    path_params: ContentSubmissionsDeleteContentSubmissionPathParams = field()
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
