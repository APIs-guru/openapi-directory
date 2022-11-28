from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GlobalImagesDeleteFilePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GlobalImagesDeleteFileRequest:
    path_params: GlobalImagesDeleteFilePathParams = field()
    

@dataclass
class GlobalImagesDeleteFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
