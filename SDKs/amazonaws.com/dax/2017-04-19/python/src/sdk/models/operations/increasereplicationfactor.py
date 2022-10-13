from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class IncreaseReplicationFactorXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_INCREASE_REPLICATION_FACTOR = "AmazonDAXV3.IncreaseReplicationFactor"


@dataclass
class IncreaseReplicationFactorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: IncreaseReplicationFactorXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class IncreaseReplicationFactorRequest:
    headers: IncreaseReplicationFactorHeaders = field(default=None)
    request: shared.IncreaseReplicationFactorRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IncreaseReplicationFactorResponse:
    cluster_not_found_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    increase_replication_factor_response: Optional[shared.IncreaseReplicationFactorResponse] = field(default=None)
    insufficient_cluster_capacity_fault: Optional[Any] = field(default=None)
    invalid_cluster_state_fault: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_vpc_network_state_fault: Optional[Any] = field(default=None)
    node_quota_for_cluster_exceeded_fault: Optional[Any] = field(default=None)
    node_quota_for_customer_exceeded_fault: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
