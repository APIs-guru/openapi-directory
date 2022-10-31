from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteVpceConfigurationXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_DELETE_VPCE_CONFIGURATION = "DeviceFarm_20150623.DeleteVPCEConfiguration"


@dataclass
class DeleteVpceConfigurationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeleteVpceConfigurationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVpceConfigurationRequest:
    headers: DeleteVpceConfigurationHeaders = field(default=None)
    request: shared.DeleteVpceConfigurationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteVpceConfigurationResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_vpce_configuration_result: Optional[dict[str, Any]] = field(default=None)
    invalid_operation_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
