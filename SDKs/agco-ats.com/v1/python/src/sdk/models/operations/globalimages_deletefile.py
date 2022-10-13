from dataclasses import dataclass, field



@dataclass
class GlobalImagesDeleteFilePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImagesDeleteFileRequest:
    path_params: GlobalImagesDeleteFilePathParams = field(default=None)
    

@dataclass
class GlobalImagesDeleteFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
