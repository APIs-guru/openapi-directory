from dataclasses import dataclass, field



@dataclass
class FilesDeleteFilePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesDeleteFileRequest:
    path_params: FilesDeleteFilePathParams = field(default=None)
    

@dataclass
class FilesDeleteFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
