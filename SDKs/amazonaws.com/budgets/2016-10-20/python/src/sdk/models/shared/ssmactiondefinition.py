from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import actionsubtype_enum


@dataclass_json
@dataclass
class SsmActionDefinition:
    action_sub_type: actionsubtype_enum.ActionSubTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionSubType' }})
    instance_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIds' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    
