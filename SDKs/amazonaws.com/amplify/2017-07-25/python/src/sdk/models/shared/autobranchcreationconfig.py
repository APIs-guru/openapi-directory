from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoBranchCreationConfig:
    r"""AutoBranchCreationConfig
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
    stage: Optional[StageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    
