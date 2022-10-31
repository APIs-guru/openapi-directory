from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeMatchmakingConfigurationsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeMatchmakingConfigurationsXAmzTargetEnum(str, Enum):
    GAME_LIFT_DESCRIBE_MATCHMAKING_CONFIGURATIONS = "GameLift.DescribeMatchmakingConfigurations"


@dataclass
class DescribeMatchmakingConfigurationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeMatchmakingConfigurationsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeMatchmakingConfigurationsRequest:
    query_params: DescribeMatchmakingConfigurationsQueryParams = field(default=None)
    headers: DescribeMatchmakingConfigurationsHeaders = field(default=None)
    request: shared.DescribeMatchmakingConfigurationsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeMatchmakingConfigurationsResponse:
    content_type: str = field(default=None)
    describe_matchmaking_configurations_output: Optional[shared.DescribeMatchmakingConfigurationsOutput] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_region_exception: Optional[Any] = field(default=None)
    
