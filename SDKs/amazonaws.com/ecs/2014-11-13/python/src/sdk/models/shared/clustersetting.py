from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clustersettingname_enum


@dataclass_json
@dataclass
class ClusterSetting:
    name: Optional[clustersettingname_enum.ClusterSettingNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
