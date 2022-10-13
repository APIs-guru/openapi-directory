from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import settingname_enum


@dataclass_json
@dataclass
class Setting:
    name: Optional[settingname_enum.SettingNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalArn' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
