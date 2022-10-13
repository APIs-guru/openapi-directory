from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autobranchcreationconfig
from . import customrule
from . import platform_enum
from . import productionbranch


@dataclass_json
@dataclass
class App:
    app_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appArn' }})
    app_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    auto_branch_creation_config: Optional[autobranchcreationconfig.AutoBranchCreationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoBranchCreationConfig' }})
    auto_branch_creation_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoBranchCreationPatterns' }})
    basic_auth_credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicAuthCredentials' }})
    build_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildSpec' }})
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customHeaders' }})
    custom_rules: Optional[List[customrule.CustomRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customRules' }})
    default_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultDomain' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enable_auto_branch_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoBranchCreation' }})
    enable_basic_auth: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBasicAuth' }})
    enable_branch_auto_build: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBranchAutoBuild' }})
    enable_branch_auto_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableBranchAutoDeletion' }})
    environment_variables: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    iam_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamServiceRoleArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: platform_enum.PlatformEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    production_branch: Optional[productionbranch.ProductionBranch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productionBranch' }})
    repository: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
