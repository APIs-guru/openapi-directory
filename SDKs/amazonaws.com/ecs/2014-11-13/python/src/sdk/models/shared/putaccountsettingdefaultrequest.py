from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import settingname_enum


@dataclass_json
@dataclass
class PutAccountSettingDefaultRequest:
    name: settingname_enum.SettingNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
