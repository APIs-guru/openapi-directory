from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class KeyRevokePathParams:
    pk: str = field(default=None, metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeyRevokeQueryParams:
    secret: str = field(default=None, metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    

@dataclass
class KeyRevokeRequest:
    path_params: KeyRevokePathParams = field(default=None)
    query_params: KeyRevokeQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class KeyRevoke200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class KeyRevokeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    key_revoke_200_application_json_object: Optional[KeyRevoke200ApplicationJSON] = field(default=None)
    
