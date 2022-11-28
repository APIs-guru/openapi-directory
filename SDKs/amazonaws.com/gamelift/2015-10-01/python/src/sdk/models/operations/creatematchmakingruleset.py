from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateMatchmakingRuleSetXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_MATCHMAKING_RULE_SET = "GameLift.CreateMatchmakingRuleSet"


@dataclass
class CreateMatchmakingRuleSetHeaders:
    x_amz_target: CreateMatchmakingRuleSetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMatchmakingRuleSetRequest:
    headers: CreateMatchmakingRuleSetHeaders = field()
    request: shared.CreateMatchmakingRuleSetInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMatchmakingRuleSetResponse:
    content_type: str = field()
    status_code: int = field()
    create_matchmaking_rule_set_output: Optional[shared.CreateMatchmakingRuleSetOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    tagging_failed_exception: Optional[Any] = field(default=None)
    unsupported_region_exception: Optional[Any] = field(default=None)
    
