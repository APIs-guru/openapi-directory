from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutRemediationConfigurationsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_REMEDIATION_CONFIGURATIONS = "StarlingDoveService.PutRemediationConfigurations"


@dataclass
class PutRemediationConfigurationsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutRemediationConfigurationsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutRemediationConfigurationsRequest:
    headers: PutRemediationConfigurationsHeaders = field(default=None)
    request: shared.PutRemediationConfigurationsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRemediationConfigurationsResponse:
    content_type: str = field(default=None)
    insufficient_permissions_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    put_remediation_configurations_response: Optional[shared.PutRemediationConfigurationsResponse] = field(default=None)
    status_code: int = field(default=None)
    
