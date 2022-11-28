from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateRuntimeConfigurationXAmzTargetEnum(str, Enum):
    GAME_LIFT_UPDATE_RUNTIME_CONFIGURATION = "GameLift.UpdateRuntimeConfiguration"


@dataclass
class UpdateRuntimeConfigurationHeaders:
    x_amz_target: UpdateRuntimeConfigurationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRuntimeConfigurationRequest:
    headers: UpdateRuntimeConfigurationHeaders = field()
    request: shared.UpdateRuntimeConfigurationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRuntimeConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_fleet_status_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_runtime_configuration_output: Optional[shared.UpdateRuntimeConfigurationOutput] = field(default=None)
    
