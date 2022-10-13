from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateServicePrimaryTaskSetXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_SERVICE_PRIMARY_TASK_SET = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"


@dataclass
class UpdateServicePrimaryTaskSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateServicePrimaryTaskSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateServicePrimaryTaskSetRequest:
    headers: UpdateServicePrimaryTaskSetHeaders = field(default=None)
    request: shared.UpdateServicePrimaryTaskSetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateServicePrimaryTaskSetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_not_active_exception: Optional[Any] = field(default=None)
    service_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    task_set_not_found_exception: Optional[Any] = field(default=None)
    unsupported_feature_exception: Optional[Any] = field(default=None)
    update_service_primary_task_set_response: Optional[shared.UpdateServicePrimaryTaskSetResponse] = field(default=None)
    
