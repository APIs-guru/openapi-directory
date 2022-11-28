from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateStorageVirtualMachineXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_UPDATE_STORAGE_VIRTUAL_MACHINE = "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine"


@dataclass
class UpdateStorageVirtualMachineHeaders:
    x_amz_target: UpdateStorageVirtualMachineXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateStorageVirtualMachineRequest:
    headers: UpdateStorageVirtualMachineHeaders = field()
    request: shared.UpdateStorageVirtualMachineRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStorageVirtualMachineResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[Any] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    storage_virtual_machine_not_found: Optional[Any] = field(default=None)
    unsupported_operation: Optional[Any] = field(default=None)
    update_storage_virtual_machine_response: Optional[shared.UpdateStorageVirtualMachineResponse] = field(default=None)
    
