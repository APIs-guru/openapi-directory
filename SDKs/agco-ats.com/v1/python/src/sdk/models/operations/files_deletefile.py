from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FilesDeleteFilePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesDeleteFileRequest:
    path_params: FilesDeleteFilePathParams = field()
    

@dataclass
class FilesDeleteFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
