from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import managedscaling
from . import managedterminationprotection_enum


@dataclass_json
@dataclass
class AutoScalingGroupProviderUpdate:
    managed_scaling: Optional[managedscaling.ManagedScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedScaling' }})
    managed_termination_protection: Optional[managedterminationprotection_enum.ManagedTerminationProtectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedTerminationProtection' }})
    
