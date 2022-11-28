from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentSubmissionTypesDeleteContentSubmissionTypePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionTypesDeleteContentSubmissionTypeRequest:
    path_params: ContentSubmissionTypesDeleteContentSubmissionTypePathParams = field()
    

@dataclass
class ContentSubmissionTypesDeleteContentSubmissionTypeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
