from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tier_enum


@dataclass_json
@dataclass
class UpdateComponentConfigurationRequest:
    component_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentConfiguration' }})
    component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentName' }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Monitor' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    tier: Optional[tier_enum.TierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    
