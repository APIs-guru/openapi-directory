from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SuspendGameServerGroupXAmzTargetEnum(str, Enum):
    GAME_LIFT_SUSPEND_GAME_SERVER_GROUP = "GameLift.SuspendGameServerGroup"


@dataclass
class SuspendGameServerGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SuspendGameServerGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SuspendGameServerGroupRequest:
    headers: SuspendGameServerGroupHeaders = field(default=None)
    request: shared.SuspendGameServerGroupInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SuspendGameServerGroupResponse:
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    suspend_game_server_group_output: Optional[shared.SuspendGameServerGroupOutput] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
