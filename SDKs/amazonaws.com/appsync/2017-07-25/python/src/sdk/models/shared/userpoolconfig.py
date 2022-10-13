from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import defaultaction_enum


@dataclass_json
@dataclass
class UserPoolConfig:
    app_id_client_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIdClientRegex' }})
    aws_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsRegion' }})
    default_action: defaultaction_enum.DefaultActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAction' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPoolId' }})
    
