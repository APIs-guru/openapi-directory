from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutConfigurationAggregatorXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_CONFIGURATION_AGGREGATOR = "StarlingDoveService.PutConfigurationAggregator"


@dataclass
class PutConfigurationAggregatorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutConfigurationAggregatorXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutConfigurationAggregatorRequest:
    headers: PutConfigurationAggregatorHeaders = field(default=None)
    request: shared.PutConfigurationAggregatorRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutConfigurationAggregatorResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_role_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    no_available_organization_exception: Optional[Any] = field(default=None)
    organization_access_denied_exception: Optional[Any] = field(default=None)
    organization_all_features_not_enabled_exception: Optional[Any] = field(default=None)
    put_configuration_aggregator_response: Optional[shared.PutConfigurationAggregatorResponse] = field(default=None)
    status_code: int = field(default=None)
    
