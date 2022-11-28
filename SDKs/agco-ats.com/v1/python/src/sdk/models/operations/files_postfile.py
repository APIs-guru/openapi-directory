from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FilesPostFileRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_file_download: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_file_download1: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_file_download2: Optional[shared.GlobalResourcesSharedModelsFileDownload] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class FilesPostFileRequest:
    request: FilesPostFileRequests = field()
    

@dataclass
class FilesPostFileResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    files_post_file_200_application_json_string: Optional[str] = field(default=None)
    files_post_file_200_application_xml_string: Optional[str] = field(default=None)
    files_post_file_200_text_json_string: Optional[str] = field(default=None)
    files_post_file_200_text_xml_string: Optional[str] = field(default=None)
    
