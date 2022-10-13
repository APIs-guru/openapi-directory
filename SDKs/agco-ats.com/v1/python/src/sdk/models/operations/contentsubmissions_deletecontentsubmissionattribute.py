from dataclasses import dataclass, field



@dataclass
class ContentSubmissionsDeleteContentSubmissionAttributePathParams:
    content_submission_attribute_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentSubmissionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionAttributeRequest:
    path_params: ContentSubmissionsDeleteContentSubmissionAttributePathParams = field(default=None)
    

@dataclass
class ContentSubmissionsDeleteContentSubmissionAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
