from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteStorageVirtualMachineXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_DELETE_STORAGE_VIRTUAL_MACHINE = "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine"


@dataclass
class DeleteStorageVirtualMachineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeleteStorageVirtualMachineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStorageVirtualMachineRequest:
    headers: DeleteStorageVirtualMachineHeaders = field(default=None)
    request: shared.DeleteStorageVirtualMachineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteStorageVirtualMachineResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_storage_virtual_machine_response: Optional[shared.DeleteStorageVirtualMachineResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    storage_virtual_machine_not_found: Optional[Any] = field(default=None)
    
