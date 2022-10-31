from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutAccountPreferencesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutAccountPreferencesRequestBodyResourceIDTypeEnum(str, Enum):
    LONG_ID = "LONG_ID"
    SHORT_ID = "SHORT_ID"


@dataclass_json
@dataclass
class PutAccountPreferencesRequestBody:
    resource_id_type: PutAccountPreferencesRequestBodyResourceIDTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdType' }})
    

@dataclass
class PutAccountPreferencesRequest:
    headers: PutAccountPreferencesHeaders = field(default=None)
    request: PutAccountPreferencesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAccountPreferencesResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    put_account_preferences_response: Optional[shared.PutAccountPreferencesResponse] = field(default=None)
    status_code: int = field(default=None)
    
