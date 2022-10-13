from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class SelectAggregateResourceConfigQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class SelectAggregateResourceConfigXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_SELECT_AGGREGATE_RESOURCE_CONFIG = "StarlingDoveService.SelectAggregateResourceConfig"


@dataclass
class SelectAggregateResourceConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SelectAggregateResourceConfigXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SelectAggregateResourceConfigRequest:
    query_params: SelectAggregateResourceConfigQueryParams = field(default=None)
    headers: SelectAggregateResourceConfigHeaders = field(default=None)
    request: shared.SelectAggregateResourceConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SelectAggregateResourceConfigResponse:
    content_type: str = field(default=None)
    invalid_expression_exception: Optional[Any] = field(default=None)
    invalid_limit_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    no_such_configuration_aggregator_exception: Optional[Any] = field(default=None)
    select_aggregate_resource_config_response: Optional[shared.SelectAggregateResourceConfigResponse] = field(default=None)
    status_code: int = field(default=None)
    
