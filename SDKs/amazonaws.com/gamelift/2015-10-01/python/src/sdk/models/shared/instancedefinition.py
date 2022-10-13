from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gameservergroupinstancetype_enum


@dataclass_json
@dataclass
class InstanceDefinition:
    instance_type: gameservergroupinstancetype_enum.GameServerGroupInstanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    weighted_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeightedCapacity' }})
    
