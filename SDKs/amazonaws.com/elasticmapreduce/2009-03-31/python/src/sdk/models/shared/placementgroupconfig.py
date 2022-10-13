from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceroletype_enum
from . import placementgroupstrategy_enum


@dataclass_json
@dataclass
class PlacementGroupConfig:
    instance_role: instanceroletype_enum.InstanceRoleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceRole' }})
    placement_strategy: Optional[placementgroupstrategy_enum.PlacementGroupStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementStrategy' }})
    
