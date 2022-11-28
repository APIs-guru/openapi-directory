from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementGroupConfig:
    r"""PlacementGroupConfig
    <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.</p> <p>To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>
    """
    
    instance_role: InstanceRoleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceRole') }})
    placement_strategy: Optional[PlacementGroupStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementStrategy') }})
    
