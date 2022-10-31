from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateFargateProfilePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFargateProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateFargateProfileRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    fargate_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargateProfileName' }})
    pod_execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podExecutionRoleArn' }})
    selectors: Optional[List[shared.FargateProfileSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectors' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateFargateProfileRequest:
    path_params: CreateFargateProfilePathParams = field(default=None)
    headers: CreateFargateProfileHeaders = field(default=None)
    request: CreateFargateProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFargateProfileResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_fargate_profile_response: Optional[shared.CreateFargateProfileResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_availability_zone_exception: Optional[Any] = field(default=None)
    
