from dataclasses import dataclass, field



@dataclass
class ContentSubmissionsDeleteContentSubmissionPathParams:
    content_submission_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentSubmissionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionRequest:
    path_params: ContentSubmissionsDeleteContentSubmissionPathParams = field(default=None)
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
