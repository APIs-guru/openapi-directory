from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDetailsOfFileByIDPathParams:
    file_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'fileUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDetailsOfFileByIDQueryParams:
    inline_files: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline_files', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDetailsOfFileByIDSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDetailsOfFileByIDRequest:
    path_params: GetDetailsOfFileByIDPathParams = field(default=None)
    query_params: GetDetailsOfFileByIDQueryParams = field(default=None)
    security: GetDetailsOfFileByIDSecurity = field(default=None)
    

@dataclass
class GetDetailsOfFileByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    file: Optional[shared.File] = field(default=None)
    status_code: int = field(default=None)
    
