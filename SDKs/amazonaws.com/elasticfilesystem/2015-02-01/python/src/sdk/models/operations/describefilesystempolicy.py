from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeFileSystemPolicyPathParams:
    file_system_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeFileSystemPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DescribeFileSystemPolicyRequest:
    path_params: DescribeFileSystemPolicyPathParams = field(default=None)
    headers: DescribeFileSystemPolicyHeaders = field(default=None)
    

@dataclass
class DescribeFileSystemPolicyResponse:
    content_type: str = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    file_system_policy_description: Optional[shared.FileSystemPolicyDescription] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    policy_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
