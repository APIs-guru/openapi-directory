from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import greenfleetprovisioningaction_enum


@dataclass_json
@dataclass
class GreenFleetProvisioningOption:
    action: Optional[greenfleetprovisioningaction_enum.GreenFleetProvisioningActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    
