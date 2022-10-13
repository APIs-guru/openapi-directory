from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tier_enum


@dataclass_json
@dataclass
class DescribeComponentConfigurationResponse:
    component_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentConfiguration' }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Monitor' }})
    tier: Optional[tier_enum.TierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    
