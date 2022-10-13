from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class KeyRevokeNosecretQueryParams:
    code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    email: str = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    phone: str = field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    

@dataclass
class KeyRevokeNosecretRequest:
    query_params: KeyRevokeNosecretQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class KeyRevokeNosecret200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class KeyRevokeNosecretResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    key_revoke_nosecret_200_application_json_object: Optional[KeyRevokeNosecret200ApplicationJSON] = field(default=None)
    
