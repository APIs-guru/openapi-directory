from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FilesPostFileRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_file_download: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_file_download1: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_file_download2: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class FilesPostFileRequest:
    request: FilesPostFileRequests = field(default=None)
    

@dataclass
class FilesPostFileResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    files_post_file_200_application_json_string: Optional[str] = field(default=None)
    files_post_file_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
