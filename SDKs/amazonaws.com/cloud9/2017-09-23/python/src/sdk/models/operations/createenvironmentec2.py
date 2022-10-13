from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateEnvironmentEc2XAmzTargetEnum(str, Enum):
    AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2 = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2"


@dataclass
class CreateEnvironmentEc2Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateEnvironmentEc2XAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateEnvironmentEc2Request:
    headers: CreateEnvironmentEc2Headers = field(default=None)
    request: shared.CreateEnvironmentEc2Request = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEnvironmentEc2Response:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_environment_ec2_result: Optional[shared.CreateEnvironmentEc2Result] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
