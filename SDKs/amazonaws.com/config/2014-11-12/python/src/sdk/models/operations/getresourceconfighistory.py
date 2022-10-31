from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetResourceConfigHistoryQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetResourceConfigHistoryXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_RESOURCE_CONFIG_HISTORY = "StarlingDoveService.GetResourceConfigHistory"


@dataclass
class GetResourceConfigHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetResourceConfigHistoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourceConfigHistoryRequest:
    query_params: GetResourceConfigHistoryQueryParams = field(default=None)
    headers: GetResourceConfigHistoryHeaders = field(default=None)
    request: shared.GetResourceConfigHistoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetResourceConfigHistoryResponse:
    content_type: str = field(default=None)
    get_resource_config_history_response: Optional[shared.GetResourceConfigHistoryResponse] = field(default=None)
    invalid_limit_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    invalid_time_range_exception: Optional[Any] = field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = field(default=None)
    resource_not_discovered_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
