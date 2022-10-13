from dataclasses import dataclass, field



@dataclass
class ContentSubmissionTypesDeleteContentSubmissionTypePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionTypesDeleteContentSubmissionTypeRequest:
    path_params: ContentSubmissionTypesDeleteContentSubmissionTypePathParams = field(default=None)
    

@dataclass
class ContentSubmissionTypesDeleteContentSubmissionTypeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
