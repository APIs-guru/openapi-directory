from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import settingname_enum


@dataclass_json
@dataclass
class ListAccountSettingsRequest:
    effective_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveSettings' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    name: Optional[settingname_enum.SettingNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalArn' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
