from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateBranchPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    branch_name: str = field(default=None, metadata={'path_param': { 'field_name': 'branchName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBranchHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateBranchRequestBodyStageEnum(str, Enum):
    PRODUCTION = "PRODUCTION"
    BETA = "BETA"
    DEVELOPMENT = "DEVELOPMENT"
    EXPERIMENTAL = "EXPERIMENTAL"
    PULL_REQUEST = "PULL_REQUEST"


@dataclass_json
@dataclass
class UpdateBranchRequestBody:
    backend_environment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backendEnvironmentArn' }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildSpec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_auto_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoBuild' }})
    enable_basic_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBasicAuth' }})
    enable_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableNotification' }})
    enable_performance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePerformanceMode' }})
    enable_pull_request_preview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePullRequestPreview' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    pull_request_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestEnvironmentName' }})
    stage: Optional[UpdateBranchRequestBodyStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    

@dataclass
class UpdateBranchRequest:
    path_params: UpdateBranchPathParams = field(default=None)
    headers: UpdateBranchHeaders = field(default=None)
    request: UpdateBranchRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBranchResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    dependent_service_failure_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_branch_result: Optional[shared.UpdateBranchResult] = field(default=None)
    
