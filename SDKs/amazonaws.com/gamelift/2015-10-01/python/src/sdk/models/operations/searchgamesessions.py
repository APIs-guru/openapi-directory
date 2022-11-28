from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SearchGameSessionsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class SearchGameSessionsXAmzTargetEnum(str, Enum):
    GAME_LIFT_SEARCH_GAME_SESSIONS = "GameLift.SearchGameSessions"


@dataclass
class SearchGameSessionsHeaders:
    x_amz_target: SearchGameSessionsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchGameSessionsRequest:
    headers: SearchGameSessionsHeaders = field()
    query_params: SearchGameSessionsQueryParams = field()
    request: shared.SearchGameSessionsInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchGameSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    search_game_sessions_output: Optional[shared.SearchGameSessionsOutput] = field(default=None)
    terminal_routing_strategy_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
