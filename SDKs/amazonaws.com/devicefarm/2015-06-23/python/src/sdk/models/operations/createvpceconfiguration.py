from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateVpceConfigurationXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_CREATE_VPCE_CONFIGURATION = "DeviceFarm_20150623.CreateVPCEConfiguration"


@dataclass
class CreateVpceConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateVpceConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateVpceConfigurationRequest:
    headers: CreateVpceConfigurationHeaders = field(default=None)
    request: shared.CreateVpceConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVpceConfigurationResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_vpce_configuration_result: Optional[shared.CreateVpceConfigurationResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
