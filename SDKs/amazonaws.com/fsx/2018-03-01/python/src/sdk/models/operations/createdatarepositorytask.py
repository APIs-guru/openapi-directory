from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDataRepositoryTaskXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_CREATE_DATA_REPOSITORY_TASK = "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask"


@dataclass
class CreateDataRepositoryTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateDataRepositoryTaskXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateDataRepositoryTaskRequest:
    headers: CreateDataRepositoryTaskHeaders = field(default=None)
    request: shared.CreateDataRepositoryTaskRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDataRepositoryTaskResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_data_repository_task_response: Optional[shared.CreateDataRepositoryTaskResponse] = field(default=None)
    data_repository_task_executing: Optional[Any] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation: Optional[Any] = field(default=None)
    
