from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DownloadFileByIDPathParams:
    file_uuid: str = field(metadata={'path_param': { 'field_name': 'fileUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadFileByIDSecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DownloadFileByIDRequest:
    path_params: DownloadFileByIDPathParams = field()
    security: DownloadFileByIDSecurity = field()
    

@dataclass
class DownloadFileByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    download_file_by_id_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
