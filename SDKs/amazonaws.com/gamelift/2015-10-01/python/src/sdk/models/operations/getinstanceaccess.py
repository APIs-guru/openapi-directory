from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetInstanceAccessXAmzTargetEnum(str, Enum):
    GAME_LIFT_GET_INSTANCE_ACCESS = "GameLift.GetInstanceAccess"


@dataclass
class GetInstanceAccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetInstanceAccessXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetInstanceAccessRequest:
    headers: GetInstanceAccessHeaders = field(default=None)
    request: shared.GetInstanceAccessInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetInstanceAccessResponse:
    content_type: str = field(default=None)
    get_instance_access_output: Optional[shared.GetInstanceAccessOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
