from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAppPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAppHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateAppRequestBodyAutoBranchCreationConfig:
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildSpec' }})
    enable_auto_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoBuild' }})
    enable_basic_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBasicAuth' }})
    enable_performance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePerformanceMode' }})
    enable_pull_request_preview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePullRequestPreview' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    pull_request_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullRequestEnvironmentName' }})
    stage: Optional[shared.StageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    
class UpdateAppRequestBodyPlatformEnum(str, Enum):
    WEB = "WEB"


@dataclass_json
@dataclass
class UpdateAppRequestBody:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    auto_branch_creation_config: Optional[UpdateAppRequestBodyAutoBranchCreationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoBranchCreationConfig' }})
    auto_branch_creation_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoBranchCreationPatterns' }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildSpec' }})
    custom_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customHeaders' }})
    custom_rules: Optional[List[shared.CustomRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customRules' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enable_auto_branch_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoBranchCreation' }})
    enable_basic_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBasicAuth' }})
    enable_branch_auto_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBranchAutoBuild' }})
    enable_branch_auto_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBranchAutoDeletion' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    iam_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamServiceRoleArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oauth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauthToken' }})
    platform: Optional[UpdateAppRequestBodyPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    

@dataclass
class UpdateAppRequest:
    path_params: UpdateAppPathParams = field(default=None)
    headers: UpdateAppHeaders = field(default=None)
    request: UpdateAppRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAppResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_app_result: Optional[shared.UpdateAppResult] = field(default=None)
    
