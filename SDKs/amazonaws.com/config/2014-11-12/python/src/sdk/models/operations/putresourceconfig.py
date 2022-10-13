from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutResourceConfigXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_RESOURCE_CONFIG = "StarlingDoveService.PutResourceConfig"


@dataclass
class PutResourceConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutResourceConfigXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutResourceConfigRequest:
    headers: PutResourceConfigHeaders = field(default=None)
    request: shared.PutResourceConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutResourceConfigResponse:
    content_type: str = field(default=None)
    insufficient_permissions_exception: Optional[Any] = field(default=None)
    max_active_resources_exceeded_exception: Optional[Any] = field(default=None)
    no_running_configuration_recorder_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
