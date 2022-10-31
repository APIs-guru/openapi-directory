from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateFleetPortSettingsXAmzTargetEnum(str, Enum):
    GAME_LIFT_UPDATE_FLEET_PORT_SETTINGS = "GameLift.UpdateFleetPortSettings"


@dataclass
class UpdateFleetPortSettingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateFleetPortSettingsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFleetPortSettingsRequest:
    headers: UpdateFleetPortSettingsHeaders = field(default=None)
    request: shared.UpdateFleetPortSettingsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFleetPortSettingsResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_fleet_status_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_fleet_port_settings_output: Optional[shared.UpdateFleetPortSettingsOutput] = field(default=None)
    
