from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancefleettype_enum
from . import instancegrouptype_enum
from . import instancestate_enum


@dataclass_json
@dataclass
class ListInstancesInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    instance_fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleetId' }})
    instance_fleet_type: Optional[instancefleettype_enum.InstanceFleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleetType' }})
    instance_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupId' }})
    instance_group_types: Optional[List[instancegrouptype_enum.InstanceGroupTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceGroupTypes' }})
    instance_states: Optional[List[instancestate_enum.InstanceStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceStates' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
