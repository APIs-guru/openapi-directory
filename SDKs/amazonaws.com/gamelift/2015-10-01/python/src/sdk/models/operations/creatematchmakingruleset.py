from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateMatchmakingRuleSetXAmzTargetEnum(str, Enum):
    GAME_LIFT_CREATE_MATCHMAKING_RULE_SET = "GameLift.CreateMatchmakingRuleSet"


@dataclass
class CreateMatchmakingRuleSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateMatchmakingRuleSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateMatchmakingRuleSetRequest:
    headers: CreateMatchmakingRuleSetHeaders = field(default=None)
    request: shared.CreateMatchmakingRuleSetInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMatchmakingRuleSetResponse:
    content_type: str = field(default=None)
    create_matchmaking_rule_set_output: Optional[shared.CreateMatchmakingRuleSetOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tagging_failed_exception: Optional[Any] = field(default=None)
    unsupported_region_exception: Optional[Any] = field(default=None)
    
