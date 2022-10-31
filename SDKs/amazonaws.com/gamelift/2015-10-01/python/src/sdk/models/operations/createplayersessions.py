from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreatePlayerSessionsXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_PLAYER_SESSIONS = "GameLift.CreatePlayerSessions"


@dataclass
class CreatePlayerSessionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreatePlayerSessionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePlayerSessionsRequest:
    headers: CreatePlayerSessionsHeaders = field(default=None)
    request: shared.CreatePlayerSessionsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePlayerSessionsResponse:
    content_type: str = field(default=None)
    create_player_sessions_output: Optional[shared.CreatePlayerSessionsOutput] = field(default=None)
    game_session_full_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_game_session_status_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    terminal_routing_strategy_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
