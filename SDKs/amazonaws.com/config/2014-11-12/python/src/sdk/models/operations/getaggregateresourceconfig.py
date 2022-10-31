from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetAggregateResourceConfigXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_AGGREGATE_RESOURCE_CONFIG = "StarlingDoveService.GetAggregateResourceConfig"


@dataclass
class GetAggregateResourceConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetAggregateResourceConfigXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAggregateResourceConfigRequest:
    headers: GetAggregateResourceConfigHeaders = field(default=None)
    request: shared.GetAggregateResourceConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetAggregateResourceConfigResponse:
    content_type: str = field(default=None)
    get_aggregate_resource_config_response: Optional[shared.GetAggregateResourceConfigResponse] = field(default=None)
    no_such_configuration_aggregator_exception: Optional[Any] = field(default=None)
    oversized_configuration_item_exception: Optional[Any] = field(default=None)
    resource_not_discovered_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
