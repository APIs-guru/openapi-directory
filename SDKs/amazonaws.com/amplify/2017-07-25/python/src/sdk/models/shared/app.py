from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class App:
    r"""App
     Represents the different branches of a repository for building, deploying, and hosting an Amplify app. 
    """
    
    app_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    app_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDomain') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_basic_auth: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBasicAuth') }})
    enable_branch_auto_build: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBranchAutoBuild') }})
    environment_variables: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: PlatformEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    repository: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auto_branch_creation_config: Optional[AutoBranchCreationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBranchCreationConfig') }})
    auto_branch_creation_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBranchCreationPatterns') }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildSpec') }})
    custom_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHeaders') }})
    custom_rules: Optional[List[CustomRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRules') }})
    enable_auto_branch_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoBranchCreation') }})
    enable_branch_auto_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBranchAutoDeletion') }})
    iam_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamServiceRoleArn') }})
    production_branch: Optional[ProductionBranch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productionBranch') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
