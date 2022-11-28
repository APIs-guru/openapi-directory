from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDetailsOfFileByIDPathParams:
    file_uuid: str = field(metadata={'path_param': { 'field_name': 'fileUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDetailsOfFileByIDQueryParams:
    inline_files: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline_files', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDetailsOfFileByIDSecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDetailsOfFileByIDRequest:
    path_params: GetDetailsOfFileByIDPathParams = field()
    query_params: GetDetailsOfFileByIDQueryParams = field()
    security: GetDetailsOfFileByIDSecurity = field()
    

@dataclass
class GetDetailsOfFileByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    file: Optional[shared.File] = field(default=None)
    
