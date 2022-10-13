from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopFleetXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_STOP_FLEET = "PhotonAdminProxyService.StopFleet"


@dataclass
class StopFleetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopFleetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopFleetRequest:
    headers: StopFleetHeaders = field(default=None)
    request: shared.StopFleetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopFleetResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_fleet_result: Optional[dict[str, Any]] = field(default=None)
    
