from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FilesGetFilePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesGetFileRequest:
    path_params: FilesGetFilePathParams = field(default=None)
    

@dataclass
class FilesGetFileResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_resources_shared_models_file_download: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None)
    status_code: int = field(default=None)
    
