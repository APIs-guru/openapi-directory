from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ModifyEndpointXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_MODIFY_ENDPOINT = "AmazonDMSv20160101.ModifyEndpoint"


@dataclass
class ModifyEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ModifyEndpointXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ModifyEndpointRequest:
    headers: ModifyEndpointHeaders = field(default=None)
    request: shared.ModifyEndpointMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyEndpointResponse:
    access_denied_fault: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    kms_key_not_accessible_fault: Optional[Any] = field(default=None)
    modify_endpoint_response: Optional[shared.ModifyEndpointResponse] = field(default=None)
    resource_already_exists_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
