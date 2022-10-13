from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import targettrackingconfiguration


@dataclass_json
@dataclass
class GameServerGroupAutoScalingPolicy:
    estimated_instance_warmup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedInstanceWarmup' }})
    target_tracking_configuration: targettrackingconfiguration.TargetTrackingConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTrackingConfiguration' }})
    
