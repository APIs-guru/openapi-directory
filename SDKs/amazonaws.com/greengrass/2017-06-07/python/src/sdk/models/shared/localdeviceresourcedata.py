from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import groupownersetting


@dataclass_json
@dataclass
class LocalDeviceResourceData:
    group_owner_setting: Optional[groupownersetting.GroupOwnerSetting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupOwnerSetting' }})
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourcePath' }})
    
