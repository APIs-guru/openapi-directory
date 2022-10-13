from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ValidateMatchmakingRuleSetXAmzTargetEnum(str, Enum):
    GAME_LIFT_VALIDATE_MATCHMAKING_RULE_SET = "GameLift.ValidateMatchmakingRuleSet"


@dataclass
class ValidateMatchmakingRuleSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ValidateMatchmakingRuleSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ValidateMatchmakingRuleSetRequest:
    headers: ValidateMatchmakingRuleSetHeaders = field(default=None)
    request: shared.ValidateMatchmakingRuleSetInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidateMatchmakingRuleSetResponse:
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_region_exception: Optional[Any] = field(default=None)
    validate_matchmaking_rule_set_output: Optional[shared.ValidateMatchmakingRuleSetOutput] = field(default=None)
    
