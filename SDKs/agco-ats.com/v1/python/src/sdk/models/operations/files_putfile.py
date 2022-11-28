from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FilesPutFilePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilesPutFileRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_file_download: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_file_download1: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_file_download2: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class FilesPutFileRequest:
    path_params: FilesPutFilePathParams = field()
    request: FilesPutFileRequests = field()
    

@dataclass
class FilesPutFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
