from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DownloadFileByIDPathParams:
    file_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'fileUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileByIDSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DownloadFileByIDRequest:
    path_params: DownloadFileByIDPathParams = field(default=None)
    security: DownloadFileByIDSecurity = field(default=None)
    

@dataclass
class DownloadFileByIDResponse:
    content_type: str = field(default=None)
    download_file_by_id_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
