from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FilesGetFilePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesGetFileRequest:
    path_params: FilesGetFilePathParams = field()
    

@dataclass
class FilesGetFileResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_file_download: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None)
    
