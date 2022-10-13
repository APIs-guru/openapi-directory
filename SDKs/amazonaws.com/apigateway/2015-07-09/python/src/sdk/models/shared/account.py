from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import throttlesettings


@dataclass_json
@dataclass
class Account:
    api_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyVersion' }})
    cloudwatch_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudwatchRoleArn' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    throttle_settings: Optional[throttlesettings.ThrottleSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttleSettings' }})
    
