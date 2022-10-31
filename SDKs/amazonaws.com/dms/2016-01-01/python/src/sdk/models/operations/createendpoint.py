from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateEndpointXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_CREATE_ENDPOINT = "AmazonDMSv20160101.CreateEndpoint"


@dataclass
class CreateEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateEndpointXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEndpointRequest:
    headers: CreateEndpointHeaders = field(default=None)
    request: shared.CreateEndpointMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEndpointResponse:
    access_denied_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_endpoint_response: Optional[shared.CreateEndpointResponse] = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    kms_key_not_accessible_fault: Optional[Any] = field(default=None)
    resource_already_exists_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    resource_quota_exceeded_fault: Optional[Any] = field(default=None)
    s3_access_denied_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
