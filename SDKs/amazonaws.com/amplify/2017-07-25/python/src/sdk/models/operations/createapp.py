from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateAppHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateAppRequestBodyAutoBranchCreationConfig:
    r"""CreateAppRequestBodyAutoBranchCreationConfig
     Describes the automated branch creation configuration. 
    """
    
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildSpec') }})
    enable_auto_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoBuild') }})
    enable_basic_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBasicAuth') }})
    enable_performance_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePerformanceMode') }})
    enable_pull_request_preview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePullRequestPreview') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    framework: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    pull_request_environment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEnvironmentName') }})
    stage: Optional[shared.StageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    
class CreateAppRequestBodyPlatformEnum(str, Enum):
    WEB = "WEB"


@dataclass_json
@dataclass
class CreateAppRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    auto_branch_creation_config: Optional[CreateAppRequestBodyAutoBranchCreationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBranchCreationConfig') }})
    auto_branch_creation_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBranchCreationPatterns') }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildSpec') }})
    custom_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHeaders') }})
    custom_rules: Optional[List[shared.CustomRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRules') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_auto_branch_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoBranchCreation') }})
    enable_basic_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBasicAuth') }})
    enable_branch_auto_build: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBranchAutoBuild') }})
    enable_branch_auto_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBranchAutoDeletion') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    iam_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamServiceRoleArn') }})
    oauth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthToken') }})
    platform: Optional[CreateAppRequestBodyPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateAppRequest:
    headers: CreateAppHeaders = field()
    request: CreateAppRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAppResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    create_app_result: Optional[shared.CreateAppResult] = field(default=None)
    dependent_service_failure_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
