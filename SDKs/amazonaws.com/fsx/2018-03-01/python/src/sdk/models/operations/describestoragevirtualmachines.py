from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeStorageVirtualMachinesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeStorageVirtualMachinesXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_DESCRIBE_STORAGE_VIRTUAL_MACHINES = "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines"


@dataclass
class DescribeStorageVirtualMachinesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeStorageVirtualMachinesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeStorageVirtualMachinesRequest:
    query_params: DescribeStorageVirtualMachinesQueryParams = field(default=None)
    headers: DescribeStorageVirtualMachinesHeaders = field(default=None)
    request: shared.DescribeStorageVirtualMachinesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeStorageVirtualMachinesResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_storage_virtual_machines_response: Optional[shared.DescribeStorageVirtualMachinesResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    storage_virtual_machine_not_found: Optional[Any] = field(default=None)
    
