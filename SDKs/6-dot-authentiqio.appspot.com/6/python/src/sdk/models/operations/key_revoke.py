from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class KeyRevokePathParams:
    pk: str = field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeyRevokeQueryParams:
    secret: str = field(metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class KeyRevoke200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class KeyRevokeRequest:
    path_params: KeyRevokePathParams = field()
    query_params: KeyRevokeQueryParams = field()
    

@dataclass
class KeyRevokeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    key_revoke_200_application_json_object: Optional[KeyRevoke200ApplicationJSON] = field(default=None)
    
