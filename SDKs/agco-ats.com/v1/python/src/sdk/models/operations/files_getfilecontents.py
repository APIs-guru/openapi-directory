from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class FilesGetFileContentsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesGetFileContentsRequest:
    path_params: FilesGetFileContentsPathParams = field(default=None)
    

@dataclass
class FilesGetFileContentsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
