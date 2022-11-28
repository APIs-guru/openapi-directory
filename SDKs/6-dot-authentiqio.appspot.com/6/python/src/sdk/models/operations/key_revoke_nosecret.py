from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class KeyRevokeNosecretQueryParams:
    email: str = field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    phone: str = field(metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class KeyRevokeNosecret200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class KeyRevokeNosecretRequest:
    query_params: KeyRevokeNosecretQueryParams = field()
    

@dataclass
class KeyRevokeNosecretResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    key_revoke_nosecret_200_application_json_object: Optional[KeyRevokeNosecret200ApplicationJSON] = field(default=None)
    
