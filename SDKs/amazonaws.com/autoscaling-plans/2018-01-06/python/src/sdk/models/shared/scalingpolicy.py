from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policytype_enum
from . import targettrackingconfiguration


@dataclass_json
@dataclass
class ScalingPolicy:
    policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    policy_type: policytype_enum.PolicyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    target_tracking_configuration: Optional[targettrackingconfiguration.TargetTrackingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTrackingConfiguration' }})
    
