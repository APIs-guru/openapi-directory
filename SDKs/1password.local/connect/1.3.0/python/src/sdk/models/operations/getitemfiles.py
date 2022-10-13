from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetItemFilesPathParams:
    item_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemFilesQueryParams:
    inline_files: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'inline_files', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemFilesSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetItemFilesRequest:
    path_params: GetItemFilesPathParams = field(default=None)
    query_params: GetItemFilesQueryParams = field(default=None)
    security: GetItemFilesSecurity = field(default=None)
    

@dataclass
class GetItemFilesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    files: Optional[List[shared.File]] = field(default=None)
    status_code: int = field(default=None)
    
