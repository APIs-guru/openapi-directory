from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateGameSessionXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_GAME_SESSION = "GameLift.CreateGameSession"


@dataclass
class CreateGameSessionHeaders:
    x_amz_target: CreateGameSessionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGameSessionRequest:
    headers: CreateGameSessionHeaders = field()
    request: shared.CreateGameSessionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGameSessionResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    create_game_session_output: Optional[shared.CreateGameSessionOutput] = field(default=None)
    fleet_capacity_exceeded_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_fleet_status_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    terminal_routing_strategy_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
