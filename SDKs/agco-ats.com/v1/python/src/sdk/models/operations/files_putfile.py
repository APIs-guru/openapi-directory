from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FilesPutFilePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesPutFileRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_file_download: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_file_download1: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_file_download2: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class FilesPutFileRequest:
    path_params: FilesPutFilePathParams = field(default=None)
    request: FilesPutFileRequests = field(default=None)
    

@dataclass
class FilesPutFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
